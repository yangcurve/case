import { type IsConvertable, isConvertable } from '@/utils'
import { type ToSnakeCase, toSnakeCase } from './snake'

export type ToUpperSnakeCase<T> =
  T extends string ?
    IsConvertable<T> extends true ?
      Uppercase<ToSnakeCase<T>>
    : T
  : T

export const toUpperSnakeCase = <T extends string>(s: T) =>
  (isConvertable(s) ? toSnakeCase(s).toUpperCase() : s) as ToUpperSnakeCase<T>
