import { type StringWithWhiteSpace, capitalize } from '../..';

export type SnakeCase<T extends string> = T extends ''
  ? false
  : T extends StringWithWhiteSpace<T>
    ? false
    : T extends `${string}-${string}`
      ? false
      : T extends Uppercase<T>
        ? false
        : T extends Capitalize<T>
          ? false
          : T extends `${string}_${string}`
            ? true
            : false;

export const snakeCase = <T extends string>(str: T) => {
  return (str !== '' &&
    !str.includes(' ') &&
    !str.includes('-') &&
    str !== str.toUpperCase() &&
    str !== capitalize(str) &&
    str.includes('_')) as SnakeCase<T>;
};
