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

type Convert<C extends Case, T> = T extends string
  ? {
      camel: ToCamelCase<T>;
      kebab: ToKebabCase<T>;
      pascal: ToPascalCase<T>;
      snake: ToSnakeCase<T>;
      upperKebab: ToUpperKebabCase<T>;
      upperSnake: ToUpperSnakeCase<T>;
    }[C]
  : T extends Record<string, unknown>
    ? {
        [K in keyof T as Convert<C, K>]: T[K] extends object ? Convert<C, T[K]> : T[K];
      }
    : T extends Record<number, unknown>
      ? {
          [K in keyof T]: T[K] extends object ? Convert<C, T[K]> : T[K];
        }
      : T;
const convert =
  <C extends Case>(c: C) =>
  <T>(obj: T): Convert<C, T> =>
    (typeof obj === 'string'
      ? {
          camel: toCamelCase,
          kebab: toKebabCase,
          pascal: toPascalCase,
          snake: toSnakeCase,
          upperKebab: toUpperKebabCase,
          upperSnake: toUpperSnakeCase,
        }[c](obj)
      : obj?.constructor === Object
        ? Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [convert(c)(k), v instanceof Object ? convert(c)(v) : v]),
          )
        : Array.isArray(obj)
          ? obj.map(convert(c))
          : obj) as Convert<C, T>;

export namespace to {
  export type Camel<T> = Convert<'camel', T>;
  export type Kebab<T> = Convert<'kebab', T>;
  export type Pascal<T> = Convert<'pascal', T>;
  export type Snake<T> = Convert<'snake', T>;
  export type UpperKebab<T> = Convert<'upperKebab', T>;
  export type UpperSnake<T> = Convert<'upperSnake', T>;

  export const camel = convert('camel');
  export const kebab = convert('kebab');
  export const pascal = convert('pascal');
  export const snake = convert('snake');
  export const upperKebab = convert('upperKebab');
  export const upperSnake = convert('upperSnake');
}
