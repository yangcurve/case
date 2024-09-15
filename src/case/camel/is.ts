import { type StringWithWhiteSpace, capitalize } from '../..';

export type CamelCase<T extends string> = T extends ''
  ? false
  : T extends StringWithWhiteSpace<T>
    ? false
    : T extends `${string}-${string}`
      ? false
      : T extends `${string}_${string}`
        ? false
        : T extends Uppercase<T>
          ? false
          : T extends Capitalize<T>
            ? false
            : true;

export const camelCase = <T extends string>(str: T) => {
  return (str !== '' &&
    !str.includes(' ') &&
    !str.includes('-') &&
    !str.includes('_') &&
    str !== str.toUpperCase() &&
    str !== capitalize(str)) as CamelCase<T>;
};
