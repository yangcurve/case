import type { StringWithWhiteSpace } from '../..';

export type UpperSnakeCase<T extends string> = T extends ''
  ? false
  : T extends StringWithWhiteSpace<T>
    ? false
    : T extends `${string}-${string}`
      ? false
      : T extends Lowercase<T>
        ? false
        : T extends Uppercase<T>
          ? T extends `${string}_${string}`
            ? true
            : false
          : false;

export const upperSnakeCase = <T extends string>(str: T) => {
  return (str !== '' &&
    !str.includes(' ') &&
    !str.includes('-') &&
    str !== str.toLowerCase() &&
    str === str.toUpperCase() &&
    str.includes('_')) as UpperSnakeCase<T>;
};
