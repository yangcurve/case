import { type IsCamel, type IsKebab, type IsSnake, isCamel, isKebab, isSnake, uncapitalize } from '../utils';

type FromKebabToCamel<T extends string> = Lowercase<T> extends `${infer First}-${infer Rest}`
  ? `${Uncapitalize<First>}${Capitalize<FromKebabToCamel<Rest>>}`
  : T;

type FromSnakeToCamel<T extends string> = Lowercase<T> extends `${infer First}_${infer Rest}`
  ? `${Uncapitalize<First>}${Capitalize<FromSnakeToCamel<Rest>>}`
  : T;

export type ToCamelCase<T> = T extends string
  ? IsCamel<T> extends true
    ? Uncapitalize<T>
    : IsKebab<T> extends true
      ? FromKebabToCamel<T>
      : IsSnake<T> extends true
        ? FromSnakeToCamel<T>
        : T
  : T;

export const toCamelCase = <T extends string>(str: T) =>
  (isCamel(str)
    ? uncapitalize(str)
    : isKebab(str)
      ? str.toLowerCase().replace(/-[a-z]/g, (match) => match.replace('-', '').toUpperCase())
      : isSnake(str)
        ? str.toLowerCase().replace(/_[a-z]/g, (match) => match.replace('_', '').toUpperCase())
        : str) as ToCamelCase<T>;
