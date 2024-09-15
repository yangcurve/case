type ToCamelCase<T extends string> = T;
type ToKebabCase<T extends string> = T;
type ToPascalCase<T extends string> = T;
type ToSnakeCase<T extends string> = T;
type ToUpperKebabCase<T extends string> = T;
type ToUpperSnakeCase<T extends string> = T;

const toCamelCase = <T extends string>(str: T) => str as ToCamelCase<T>;
const toKebabCase = <T extends string>(str: T) => str as ToKebabCase<T>;
const toPascalCase = <T extends string>(str: T) => str as ToPascalCase<T>;
const toSnakeCase = <T extends string>(str: T) => str as ToSnakeCase<T>;
const toUpperKebabCase = <T extends string>(str: T) => str as ToUpperKebabCase<T>;
const toUpperSnakeCase = <T extends string>(str: T) => str as ToUpperSnakeCase<T>;

export namespace any {
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
