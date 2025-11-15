import {
  type IsCamel,
  type IsKebab,
  type IsSnake,
  isCamel,
  isKebab,
  isSnake,
  uncapitalize,
} from '@/utils'

export type ToKebabCase<T> =
  T extends string ?
    IsKebab<T> extends true ? Lowercase<T>
    : IsCamel<T> extends true ?
      T extends `${infer First}${infer Rest}` ?
        Rest extends '' ? Lowercase<T>
        : Rest extends `${number}${string}` ?
          `${Lowercase<First>}${ToKebabCase<Rest>}`
        : Rest extends Capitalize<Rest> ?
          `${Lowercase<First>}-${ToKebabCase<Rest>}`
        : `${Lowercase<First>}${ToKebabCase<Rest>}`
      : T
    : IsSnake<T> extends true ?
      Lowercase<T> extends `${infer First}_${infer Rest}` ?
        `${First}-${ToKebabCase<Rest>}`
      : T
    : T
  : T

export const toKebabCase = <T extends string>(s: T) =>
  (isKebab(s) ? s.toLowerCase()
  : isCamel(s) ? uncapitalize(s).replace(/[A-Z]/g, '-$&').toLowerCase()
  : isSnake(s) ? s.toLowerCase().replaceAll('_', '-')
  : s) as ToKebabCase<T>
