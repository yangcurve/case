import { uncapitalize } from '../..';

type ToCamelCase<T extends string> = Uncapitalize<T>;

type ToKebabCase<T extends string> = T extends `${infer First}${infer Rest}`
  ? Rest extends `${infer F}${infer R}`
    ? F extends Uppercase<F>
      ? `${Lowercase<First>}-${Lowercase<F>}${ToKebabCase<R>}`
      : `${Lowercase<First>}${ToKebabCase<Rest>}`
    : T
  : T;

type ToPascalCase<T extends string> = T;

type ToSnakeCase<T extends string> = T extends `${infer First}${infer Rest}`
  ? Rest extends `${infer F}${infer R}`
    ? F extends Uppercase<F>
      ? `${Lowercase<First>}_${Lowercase<F>}${ToSnakeCase<R>}`
      : `${Lowercase<First>}${ToSnakeCase<Rest>}`
    : T
  : T;

type ToUpperKebabCase<T extends string> = Uppercase<ToKebabCase<T>>;

type ToUpperSnakeCase<T extends string> = Uppercase<ToSnakeCase<T>>;

const toCamelCase = <T extends string>(str: T) => uncapitalize(str) as ToCamelCase<T>;

const toKebabCase = <T extends string>(str: T) =>
  uncapitalize(str).replace(/[A-Z]/g, '-$&').toLowerCase() as ToKebabCase<T>;

const toPascalCase = <T extends string>(str: T) => str as ToPascalCase<T>;

const toSnakeCase = <T extends string>(str: T) =>
  uncapitalize(str).replace(/[A-Z]/g, '_$&').toLowerCase() as ToSnakeCase<T>;

const toUpperKebabCase = <T extends string>(str: T) => toKebabCase(str).toUpperCase() as ToUpperKebabCase<T>;

const toUpperSnakeCase = <T extends string>(str: T) => toSnakeCase(str).toUpperCase() as ToUpperSnakeCase<T>;

export namespace pascal {
  export namespace to {
    export type Any<T extends string> = T;
    export const any = <T extends string>(str: T) => str as Any<T>;

    export type Camel<T extends string> = ToCamelCase<T>;
    export const camel = toCamelCase;

    export type Kebab<T extends string> = ToKebabCase<T>;
    export const kebab = toKebabCase;

    export type Pascal<T extends string> = ToPascalCase<T>;
    export const pascal = toPascalCase;

    export type Snake<T extends string> = ToSnakeCase<T>;
    export const snake = toSnakeCase;

    export type UpperKebab<T extends string> = ToUpperKebabCase<T>;
    export const upperKebab = toUpperKebabCase;

    export type UpperSnake<T extends string> = ToUpperSnakeCase<T>;
    export const upperSnake = toUpperSnakeCase;
  }
}
