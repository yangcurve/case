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

type ObjectOrArray = Record<string, unknown> | Record<number, unknown>;
type ToCaseKeys<C extends Case, T extends ObjectOrArray> = T extends Record<string, unknown>
  ? {
      [K in keyof T as ToCase<C, K>]: T[K] extends ObjectOrArray ? ToCaseKeys<C, T[K]> : T[K];
    }
  : {
      [K in keyof T]: T[K] extends ObjectOrArray ? ToCaseKeys<C, T[K]> : T[K];
    };

export namespace to {
  const to = <C extends Case>(c: C) => ({
    case: CASE_FN[c],
    caseKeys: <T extends ObjectOrArray>(obj: T): ToCaseKeys<C, T> =>
      (Array.isArray(obj)
        ? obj.map(to(c).caseKeys)
        : Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [
              CASE_FN[c](k),
              v instanceof Object ? to(c).caseKeys(v as Record<string, unknown>) : v,
            ]),
          )) as ToCaseKeys<C, T>,
  });
  export const camel = to('camel');
  export const kebab = to('kebab');
  export const pascal = to('pascal');
  export const snake = to('snake');
  export const upperKebab = to('upperKebab');
  export const upperSnake = to('upperSnake');

  export namespace camel {
    export type Case<T> = ToCase<'camel', T>;
    export type CaseKeys<T extends Record<string, unknown>> = ToCaseKeys<'camel', T>;
  }
  export namespace kebab {
    export type Case<T> = ToCase<'kebab', T>;
    export type CaseKeys<T extends Record<string, unknown>> = ToCaseKeys<'kebab', T>;
  }
  export namespace pascal {
    export type Case<T> = ToCase<'pascal', T>;
    export type CaseKeys<T extends Record<string, unknown>> = ToCaseKeys<'pascal', T>;
  }
  export namespace snake {
    export type Case<T> = ToCase<'snake', T>;
    export type CaseKeys<T extends Record<string, unknown>> = ToCaseKeys<'snake', T>;
  }
  export namespace upperKebab {
    export type Case<T> = ToCase<'upperKebab', T>;
    export type CaseKeys<T extends Record<string, unknown>> = ToCaseKeys<'upperKebab', T>;
  }
  export namespace upperSnake {
    export type Case<T> = ToCase<'upperSnake', T>;
    export type CaseKeys<T extends Record<string, unknown>> = ToCaseKeys<'upperSnake', T>;
  }
}
