import {
  type IsCamel,
  type IsKebab,
  type IsSnake,
  isCamel,
  isKebab,
  isSnake,
  uncapitalize,
} from '@/utils'

export type ToCamelCase<T> =
  T extends string ?
    IsCamel<T> extends true ? Uncapitalize<T>
    : IsKebab<T> extends true ?
      Lowercase<T> extends `${infer First}-${infer Rest}` ?
        `${Uncapitalize<First>}${Capitalize<ToCamelCase<Rest>>}`
      : T
    : IsSnake<T> extends true ?
      Lowercase<T> extends `${infer First}_${infer Rest}` ?
        `${Uncapitalize<First>}${Capitalize<ToCamelCase<Rest>>}`
      : T
    : T
  : T

export const toCamelCase = <T extends string>(s: T) =>
  (isCamel(s) ? uncapitalize(s)
  : isKebab(s) ?
    s
      .toLowerCase()
      .replace(/-[a-z]/g, (match) => match.replace('-', '').toUpperCase())
  : isSnake(s) ?
    s
      .toLowerCase()
      .replace(/_[a-z]/g, (match) => match.replace('_', '').toUpperCase())
  : s) as ToCamelCase<T>
