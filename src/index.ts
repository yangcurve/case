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
} from './cases'

type CaseMap<T = string> = {
  camel: ToCamelCase<T>
  kebab: ToKebabCase<T>
  pascal: ToPascalCase<T>
  snake: ToSnakeCase<T>
  upperKebab: ToUpperKebabCase<T>
  upperSnake: ToUpperSnakeCase<T>
}
type Convert<C extends keyof CaseMap, T> =
  T extends string ? CaseMap<T>[C]
  : T extends Record<string, unknown> ?
    {
      [K in keyof T as Convert<C, K>]: T[K] extends object ? Convert<C, T[K]>
      : T[K]
    }
  : T extends Record<number, unknown> ?
    {
      [K in keyof T]: T[K] extends object ? Convert<C, T[K]> : T[K]
    }
  : T

const caseMap = {
  camel: toCamelCase,
  kebab: toKebabCase,
  pascal: toPascalCase,
  snake: toSnakeCase,
  upperKebab: toUpperKebabCase,
  upperSnake: toUpperSnakeCase,
}
const convert =
  <C extends keyof CaseMap>(c: C) =>
  <T>(t: T): Convert<C, T> =>
    (typeof t === 'string' ? caseMap[c](t)
    : t?.constructor === Object ?
      Object.fromEntries(
        Object.entries(t).map(([k, v]) => [
          convert(c)(k),
          v instanceof Object ? convert(c)(v) : v,
        ]),
      )
    : Array.isArray(t) ? t.map(convert(c))
    : t) as Convert<C, T>

export namespace to {
  export type Camel<T> = Convert<'camel', T>
  export type Kebab<T> = Convert<'kebab', T>
  export type Pascal<T> = Convert<'pascal', T>
  export type Snake<T> = Convert<'snake', T>
  export type UpperKebab<T> = Convert<'upperKebab', T>
  export type UpperSnake<T> = Convert<'upperSnake', T>

  export const camel = convert('camel')
  export const kebab = convert('kebab')
  export const pascal = convert('pascal')
  export const snake = convert('snake')
  export const upperKebab = convert('upperKebab')
  export const upperSnake = convert('upperSnake')
}
