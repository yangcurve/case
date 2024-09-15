import { capitalize } from '../..';

type ToCamelCase<T extends string> = T extends `${infer First}_${infer Rest}`
  ? `${Uncapitalize<First>}${Capitalize<ToCamelCase<Rest>>}`
  : T;

type ToKebabCase<T extends string> = T extends `${infer First}_${infer Rest}`
  ? `${Lowercase<First>}-${ToKebabCase<Rest>}`
  : T;

type ToPascalCase<T extends string> = T extends `${infer First}_${infer Rest}`
  ? `${Capitalize<First>}${Capitalize<ToPascalCase<Rest>>}`
  : T;

type ToSnakeCase<T extends string> = T;

type ToUpperKebabCase<T extends string> = Uppercase<ToKebabCase<T>>;

type ToUpperSnakeCase<T extends string> = Uppercase<ToSnakeCase<T>>;

const toCamelCase = <T extends string>(str: T) =>
  str.replace(/_([a-z])/g, (match) => match.replace('_', '').toUpperCase()) as ToCamelCase<T>;

const toKebabCase = <T extends string>(str: T) => str.replaceAll('_', '-') as ToKebabCase<T>;

const toPascalCase = <T extends string>(str: T) =>
  capitalize(str).replace(/_([a-z])/g, (match) => match.replace('_', '').toUpperCase()) as ToPascalCase<T>;

const toSnakeCase = <T extends string>(str: T) => str as ToSnakeCase<T>;

const toUpperKebabCase = <T extends string>(str: T) => toKebabCase(str).toUpperCase() as ToUpperKebabCase<T>;

const toUpperSnakeCase = <T extends string>(str: T) => toSnakeCase(str).toUpperCase() as ToUpperSnakeCase<T>;

export namespace snake {
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
