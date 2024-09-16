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

type ToCaseKeys<C extends Case, T extends Record<string, unknown>> = {
  [K in keyof T as {
    camel: ToCamelCase<K>;
    kebab: ToKebabCase<K>;
    pascal: ToPascalCase<K>;
    snake: ToSnakeCase<K>;
    upperKebab: ToUpperKebabCase<K>;
    upperSnake: ToUpperSnakeCase<K>;
  }[C]]: T[K] extends Record<string, unknown> ? ToCaseKeys<C, T[K]> : T[K];
};

export namespace to {
  export namespace camel {
    export type Case<T> = ToCamelCase<T>;
    export type CaseKeys<T extends Record<string, unknown>> = ToCaseKeys<'camel', T>;
  }
  export namespace kebab {
    export type Case<T> = ToKebabCase<T>;
    export type CaseKeys<T extends Record<string, unknown>> = ToCaseKeys<'kebab', T>;
  }
  export namespace pascal {
    export type Case<T> = ToPascalCase<T>;
    export type CaseKeys<T extends Record<string, unknown>> = ToCaseKeys<'pascal', T>;
  }
  export namespace snake {
    export type Case<T> = ToSnakeCase<T>;
    export type CaseKeys<T extends Record<string, unknown>> = ToCaseKeys<'snake', T>;
  }
  export namespace upperKebab {
    export type Case<T> = ToUpperKebabCase<T>;
    export type CaseKeys<T extends Record<string, unknown>> = ToCaseKeys<'upperKebab', T>;
  }
  export namespace upperSnake {
    export type Case<T> = ToUpperSnakeCase<T>;
    export type CaseKeys<T extends Record<string, unknown>> = ToCaseKeys<'upperSnake', T>;
  }

  const to = <C extends Case>(c: C) => ({
    case: CASE_FN[c],
    caseKeys: <T extends Record<string, unknown>>(obj: T) => {
      const res = {} as Record<string, unknown>;
      for (const [key, value] of Object.entries(obj))
        res[CASE_FN[c](key)] = value instanceof Object ? to(c).caseKeys(value as Record<string, unknown>) : value;
      return res as ToCaseKeys<C, T>;
    },
  });
  export const camel = to('camel');
  export const kebab = to('kebab');
  export const pascal = to('pascal');
  export const snake = to('snake');
  export const upperKebab = to('upperKebab');
  export const upperSnake = to('upperSnake');
}
