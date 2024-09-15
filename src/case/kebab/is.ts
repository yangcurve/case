import { type StringWithWhiteSpace, capitalize } from '../..';

export type KebabCase<T extends string> = T extends ''
  ? false
  : T extends StringWithWhiteSpace<T>
    ? false
    : T extends `${string}_${string}`
      ? false
      : T extends Uppercase<T>
        ? false
        : T extends Capitalize<T>
          ? false
          : T extends `${string}-${string}`
            ? true
            : false;

export const kebabCase = <T extends string>(str: T) => {
  return (str !== '' &&
    !str.includes(' ') &&
    !str.includes('_') &&
    str !== str.toUpperCase() &&
    str !== capitalize(str) &&
    str.includes('-')) as KebabCase<T>;
};
