import {
  type IsCamel,
  type IsKebab,
  type IsSnake,
  isCamel,
  isKebab,
  isSnake,
  uncapitalize,
} from '@/utils'

export type ToSnakeCase<T> =
  T extends string ?
    IsSnake<T> extends true ? Lowercase<T>
    : IsCamel<T> extends true ?
      T extends `${infer First}${infer Rest}` ?
        Rest extends '' ? Lowercase<T>
        : Rest extends `${number}${string}` ?
          `${Lowercase<First>}${ToSnakeCase<Rest>}`
        : Rest extends Capitalize<Rest> ?
          `${Lowercase<First>}_${ToSnakeCase<Rest>}`
        : `${Lowercase<First>}${ToSnakeCase<Rest>}`
      : T
    : IsKebab<T> extends true ?
      Lowercase<T> extends `${infer First}-${infer Rest}` ?
        `${First}_${ToSnakeCase<Rest>}`
      : T
    : T
  : T

export const toSnakeCase = <T extends string>(s: T) =>
  (isSnake(s) ? s.toLowerCase()
  : isCamel(s) ? uncapitalize(s).replace(/[A-Z]/g, '_$&').toLowerCase()
  : isKebab(s) ? s.toLowerCase().replaceAll('-', '_')
  : s) as ToSnakeCase<T>
