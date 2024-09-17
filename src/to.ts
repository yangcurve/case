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

type Case = 'camel' | 'kebab' | 'pascal' | 'snake' | 'upperKebab' | 'upperSnake';

type ToCase<C extends Case, T> = {
  camel: ToCamelCase<T>;
  kebab: ToKebabCase<T>;
  pascal: ToPascalCase<T>;
  snake: ToSnakeCase<T>;
  upperKebab: ToUpperKebabCase<T>;
  upperSnake: ToUpperSnakeCase<T>;
}[C];

type ToObject<C extends Case, T extends object> = T extends Record<string, unknown>
  ? {
      [K in keyof T as ToCase<C, K>]: T[K] extends object ? ToObject<C, T[K]> : T[K];
    }
  : T extends Record<number, unknown>
    ? {
        [K in keyof T]: T[K] extends object ? ToObject<C, T[K]> : T[K];
      }
    : T;

export namespace to {
  const to = <C extends Case>(c: C) => ({
    case: {
      camel: toCamelCase,
      kebab: toKebabCase,
      pascal: toPascalCase,
      snake: toSnakeCase,
      upperKebab: toUpperKebabCase,
      upperSnake: toUpperSnakeCase,
    }[c],
    object: <T extends object>(obj: T): ToObject<C, T> =>
      (Array.isArray(obj)
        ? obj.map(to(c).object)
        : obj.constructor === Object
          ? Object.fromEntries(
              Object.entries(obj).map(([k, v]) => [to(c).case(k), v instanceof Object ? to(c).object(v) : v]),
            )
          : obj) as ToObject<C, T>,
  });
  export const camel = to('camel');
  export const kebab = to('kebab');
  export const pascal = to('pascal');
  export const snake = to('snake');
  export const upperKebab = to('upperKebab');
  export const upperSnake = to('upperSnake');

  export namespace camel {
    export type Case<T> = ToCase<'camel', T>;
    export type Object<T extends object> = ToObject<'camel', T>;
  }
  export namespace kebab {
    export type Case<T> = ToCase<'kebab', T>;
    export type Object<T extends object> = ToObject<'kebab', T>;
  }
  export namespace pascal {
    export type Case<T> = ToCase<'pascal', T>;
    export type Objects<T extends object> = ToObject<'pascal', T>;
  }
  export namespace snake {
    export type Case<T> = ToCase<'snake', T>;
    export type Object<T extends object> = ToObject<'snake', T>;
  }
  export namespace upperKebab {
    export type Case<T> = ToCase<'upperKebab', T>;
    export type Object<T extends object> = ToObject<'upperKebab', T>;
  }
  export namespace upperSnake {
    export type Case<T> = ToCase<'upperSnake', T>;
    export type Object<T extends object> = ToObject<'upperSnake', T>;
  }
}
