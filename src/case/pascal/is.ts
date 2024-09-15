import { type StringWithWhiteSpace, uncapitalize } from '../..';

export type PascalCase<T extends string> = T extends ''
  ? false
  : T extends StringWithWhiteSpace<T>
    ? false
    : T extends `${string}-${string}`
      ? false
      : T extends `${string}_${string}`
        ? false
        : T extends Uppercase<T>
          ? false
          : T extends Uncapitalize<T>
            ? false
            : true;

export const pascalCase = <T extends string>(str: T) => {
  return (str !== '' &&
    !str.includes(' ') &&
    !str.includes('-') &&
    !str.includes('_') &&
    str !== str.toUpperCase() &&
    str !== uncapitalize(str)) as PascalCase<T>;
};
