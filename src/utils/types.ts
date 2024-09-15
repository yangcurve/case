export type StringWithWhiteSpace<T extends string> = T extends ` ${string}`
  ? T
  : T extends `${string} `
    ? T
    : T extends `${string} ${string}`
      ? T
      : never;

export type NonEmptyString<T extends string> = T extends '' ? never : T;
