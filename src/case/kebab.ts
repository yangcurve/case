import { type IsCamel, type IsKebab, type IsSnake, isCamel, isKebab, isSnake, uncapitalize } from '../utils';

type FromCamelToKebab<T extends string> = T extends `${infer First}${infer Rest}`
  ? Rest extends ''
    ? Lowercase<T>
    : Rest extends Capitalize<Rest>
      ? `${Lowercase<First>}-${FromCamelToKebab<Rest>}`
      : `${Lowercase<First>}${FromCamelToKebab<Rest>}`
  : T;

type FromSnakeToKebab<T extends string> = Lowercase<T> extends `${infer First}_${infer Rest}`
  ? `${First}-${FromSnakeToKebab<Rest>}`
  : T;

export type ToKebabCase<T> = T extends string
  ? IsKebab<T> extends true
    ? Lowercase<T>
    : IsCamel<T> extends true
      ? FromCamelToKebab<T>
      : IsSnake<T> extends true
        ? FromSnakeToKebab<T>
        : T
  : T;

export const toKebabCase = <T extends string>(str: T) => {
  if (isCamel(str)) return uncapitalize(str).replace(/[A-Z]/g, '-$&').toLowerCase() as ToKebabCase<T>;
  if (isKebab(str)) return str.toLowerCase() as ToKebabCase<T>;
  if (isSnake(str)) return str.toLowerCase().replaceAll('_', '-') as ToKebabCase<T>;
  return str as ToKebabCase<T>;
};
