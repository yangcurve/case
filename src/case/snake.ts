import { type IsCamel, type IsKebab, type IsSnake, isCamel, isKebab, isSnake, uncapitalize } from '../utils'

type FromCamelToSnake<T extends string> = T extends `${infer First}${infer Rest}`
  ? Rest extends ''
    ? Lowercase<T>
    : Rest extends Capitalize<Rest>
      ? `${Lowercase<First>}_${FromCamelToSnake<Rest>}`
      : `${Lowercase<First>}${FromCamelToSnake<Rest>}`
  : T

type FromKebabToSnake<T extends string> = Lowercase<T> extends `${infer First}-${infer Rest}`
  ? `${First}_${FromKebabToSnake<Rest>}`
  : T

export type ToSnakeCase<T> = T extends string
  ? IsSnake<T> extends true
    ? Lowercase<T>
    : IsCamel<T> extends true
      ? FromCamelToSnake<T>
      : IsKebab<T> extends true
        ? FromKebabToSnake<T>
        : T
  : T

export const toSnakeCase = <T extends string>(s: T) =>
  (isCamel(s)
    ? uncapitalize(s).replace(/[A-Z]/g, '_$&').toLowerCase()
    : isKebab(s)
      ? s.toLowerCase().replaceAll('-', '_')
      : isSnake(s)
        ? s.toLowerCase()
        : s) as ToSnakeCase<T>
