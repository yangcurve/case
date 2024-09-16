type Not<T extends boolean> = T extends true ? false : true;
type All<T extends boolean[]> = T[number] extends true ? true : false;
type Any<T extends boolean[]> = T[number] extends false ? false : true;

type IsEmptyString<T extends string> = T extends '' ? true : false;
type IsStringWithWhiteSpace<T extends string> = T extends `${string} ${string}` ? true : false;

type IsStringWithUnderscore<T extends string> = T extends `${string}_${string}` ? true : false;
type IsStringWithDash<T extends string> = T extends `${string}-${string}` ? true : false;

type IsMixed<T extends string> = All<[IsStringWithUnderscore<T>, IsStringWithDash<T>]>;
const isMixed = (str: string) => [str.includes('_'), str.includes('-')].every(Boolean);

export type IsConvertable<T extends string> = Not<Any<[IsEmptyString<T>, IsStringWithWhiteSpace<T>, IsMixed<T>]>>;
export const isConvertable = (str: string) => !(str === '' || str.includes(' ') || isMixed(str));

export type IsSnake<T extends string> = All<[IsConvertable<T>, IsStringWithUnderscore<T>]>;
export type IsKebab<T extends string> = All<[IsConvertable<T>, IsStringWithDash<T>]>;
export type IsCamel<T extends string> = All<
  [IsConvertable<T>, Not<IsStringWithUnderscore<T>>, Not<IsStringWithDash<T>>]
>;

export const isSnake = (str: string) => isConvertable(str) && str.includes('_');
export const isKebab = (str: string) => isConvertable(str) && str.includes('-');
export const isCamel = (str: string) => isConvertable(str) && !str.includes('_') && !str.includes('-');

export const capitalize = <T extends string>(str: T) => (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
export const uncapitalize = <T extends string>(str: T) =>
  (str.charAt(0).toLowerCase() + str.slice(1)) as Uncapitalize<T>;
