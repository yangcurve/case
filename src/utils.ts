type Not<T extends boolean> = T extends true ? false : true
type All<T extends boolean[]> = T[number] extends true ? true : false
type Any<T extends boolean[]> = T[number] extends false ? false : true

type IsEmptyString<T extends string> = T extends '' ? true : false
type IsStringWithWhiteSpace<T extends string> =
  T extends `${string} ${string}` ? true : false

type IsStringWithUnderscore<T extends string> =
  T extends `${string}_${string}` ? true : false
type IsStringWithDash<T extends string> =
  T extends `${string}-${string}` ? true : false

type IsMixed<T extends string> = All<
  [IsStringWithUnderscore<T>, IsStringWithDash<T>]
>
const isMixed = (s: string) => [s.includes('_'), s.includes('-')].every(Boolean)

export type IsConvertable<T extends string> = Not<
  Any<[IsEmptyString<T>, IsStringWithWhiteSpace<T>, IsMixed<T>]>
>
export const isConvertable = (s: string) =>
  !(s === '' || s.includes(' ') || isMixed(s))

export type IsSnake<T extends string> = All<
  [IsConvertable<T>, IsStringWithUnderscore<T>]
>
export type IsKebab<T extends string> = All<
  [IsConvertable<T>, IsStringWithDash<T>]
>
export type IsCamel<T extends string> = All<
  [IsConvertable<T>, Not<IsStringWithUnderscore<T>>, Not<IsStringWithDash<T>>]
>

export const isSnake = (s: string) => isConvertable(s) && s.includes('_')
export const isKebab = (s: string) => isConvertable(s) && s.includes('-')
export const isCamel = (s: string) =>
  isConvertable(s) && !s.includes('_') && !s.includes('-')

export const capitalize = <T extends string>(s: T) =>
  (s.charAt(0).toUpperCase() + s.slice(1)) as Capitalize<T>
export const uncapitalize = <T extends string>(s: T) =>
  (s.charAt(0).toLowerCase() + s.slice(1)) as Uncapitalize<T>
