import { type IsConvertable, isConvertable } from '../utils';
import { type ToKebabCase, toKebabCase } from './kebab';

export type ToUpperKebabCase<T> = T extends string
  ? IsConvertable<T> extends true
    ? Uppercase<ToKebabCase<T>>
    : T
  : T;

export const toUpperKebabCase = <T extends string>(str: T) =>
  (isConvertable(str) ? toKebabCase(str).toUpperCase() : str) as ToUpperKebabCase<T>;
