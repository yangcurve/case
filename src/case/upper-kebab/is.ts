import type { StringWithWhiteSpace } from '../..';

export type UpperKebabCase<T extends string> = T extends ''
  ? false
  : T extends StringWithWhiteSpace<T>
    ? false
    : T extends `${string}_${string}`
      ? false
      : T extends Lowercase<T>
        ? false
        : T extends Uppercase<T>
          ? T extends `${string}-${string}`
            ? true
            : false
          : false;

export const upperKebabCase = <T extends string>(str: T) => {
  return (str !== '' &&
    !str.includes(' ') &&
    !str.includes('_') &&
    str !== str.toLowerCase() &&
    str === str.toUpperCase() &&
    str.includes('-')) as UpperKebabCase<T>;
};
