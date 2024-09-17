import {
  type ToCamelCase,
  type ToKebabCase,
  type ToPascalCase,
  type ToSnakeCase,
  type ToUpperKebabCase,
  type ToUpperSnakeCase,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  toUpperKebabCase,
  toUpperSnakeCase,
} from './case';

const CASE_FN = {
  camel: toCamelCase,
  kebab: toKebabCase,
  pascal: toPascalCase,
  snake: toSnakeCase,
  upperKebab: toUpperKebabCase,
  upperSnake: toUpperSnakeCase,
};

type Case = keyof typeof CASE_FN;

type ToCase<C extends Case, T> = {
  camel: ToCamelCase<T>;
  kebab: ToKebabCase<T>;
  pascal: ToPascalCase<T>;
  snake: ToSnakeCase<T>;
  upperKebab: ToUpperKebabCase<T>;
  upperSnake: ToUpperSnakeCase<T>;
}[C];

type ToCaseObject<C extends Case, T extends object> = T extends Record<string, unknown>
  ? {
      [K in keyof T as ToCase<C, K>]: T[K] extends object ? ToCaseObject<C, T[K]> : T[K];
    }
  : T extends Record<number, unknown>
    ? {
        [K in keyof T]: T[K] extends object ? ToCaseObject<C, T[K]> : T[K];
      }
    : T;

export namespace to {
  const to = <C extends Case>(c: C) => ({
    case: CASE_FN[c],
    caseObject: <T extends object>(obj: T): ToCaseObject<C, T> =>
      (Array.isArray(obj)
        ? obj.map(to(c).caseObject)
        : obj.constructor === Object
          ? Object.fromEntries(
              Object.entries(obj).map(([k, v]) => [CASE_FN[c](k), v instanceof Object ? to(c).caseObject(v) : v]),
            )
          : obj) as ToCaseObject<C, T>,
  });
  export const camel = to('camel');
  export const kebab = to('kebab');
  export const pascal = to('pascal');
  export const snake = to('snake');
  export const upperKebab = to('upperKebab');
  export const upperSnake = to('upperSnake');

  export namespace camel {
    export type Case<T> = ToCase<'camel', T>;
    export type CaseObject<T extends Record<string, unknown>> = ToCaseObject<'camel', T>;
  }
  export namespace kebab {
    export type Case<T> = ToCase<'kebab', T>;
    export type CaseObject<T extends Record<string, unknown>> = ToCaseObject<'kebab', T>;
  }
  export namespace pascal {
    export type Case<T> = ToCase<'pascal', T>;
    export type CasObjects<T extends Record<string, unknown>> = ToCaseObject<'pascal', T>;
  }
  export namespace snake {
    export type Case<T> = ToCase<'snake', T>;
    export type CaseObject<T extends Record<string, unknown>> = ToCaseObject<'snake', T>;
  }
  export namespace upperKebab {
    export type Case<T> = ToCase<'upperKebab', T>;
    export type CaseObject<T extends Record<string, unknown>> = ToCaseObject<'upperKebab', T>;
  }
  export namespace upperSnake {
    export type Case<T> = ToCase<'upperSnake', T>;
    export type CaseObject<T extends Record<string, unknown>> = ToCaseObject<'upperSnake', T>;
  }
}
