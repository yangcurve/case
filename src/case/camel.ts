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

export const toCamelCase = <T extends string>(str: T) => {
  if (isCamel(str)) return uncapitalize(str) as ToCamelCase<T>;
  if (isKebab(str))
    return str.toLowerCase().replace(/-[a-z]/g, (match) => match.replace('-', '').toUpperCase()) as ToCamelCase<T>;
  if (isSnake(str))
    return str.toLowerCase().replace(/_[a-z]/g, (match) => match.replace('_', '').toUpperCase()) as ToCamelCase<T>;
  return str as ToCamelCase<T>;
};
