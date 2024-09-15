import { From, Is } from '..';
import type { ToCamelCase } from './camel';
import type { ToKebabCase } from './kebab';
import type { ToPascalCase } from './pascal';
import type { ToSnakeCase } from './snake';
import type { ToUpperKebabCase } from './upper-kebab';
import type { ToUpperSnakeCase } from './upper-snake';

export type Case = keyof typeof From;

type ToCase<C extends Case, T extends string> = C extends 'camel'
  ? ToCamelCase<T>
  : C extends 'kebab'
    ? ToKebabCase<T>
    : C extends 'pascal'
      ? ToPascalCase<T>
      : C extends 'snake'
        ? ToSnakeCase<T>
        : C extends 'upperKebab'
          ? ToUpperKebabCase<T>
          : C extends 'upperSnake'
            ? ToUpperSnakeCase<T>
            : T;

export type ToCaseKeys<C extends Case, T extends Record<string, unknown>> = {
  [K in keyof T as ToCase<C, string & K>]: T[K];
};
export type ToCaseKeysDeep<C extends Case, T extends Record<string, unknown>> = {
  [K in keyof T as ToCase<C, string & K>]: T[K] extends Record<string, unknown> ? ToCaseKeysDeep<C, T[K]> : T[K];
};

export const getCase = <T extends string>(str: T) =>
  ((Is.camelCase(str) && 'camel') ||
    (Is.kebabCase(str) && 'kebab') ||
    (Is.pascalCase(str) && 'pascal') ||
    (Is.snakeCase(str) && 'snake') ||
    (Is.upperKebabCase(str) && 'upperKebab') ||
    (Is.upperSnakeCase(str) && 'upperSnake') ||
    'any') as Case;

const toCase =
  <C extends Case>(c: C) =>
  <T extends string>(str: T) =>
    From[getCase(str)].to[c](str) as ToCase<C, T>;
const toCaseKeys =
  <C extends Case>(c: C) =>
  <T extends Record<string, unknown>>(obj: T) => {
    const res = {} as Record<string, unknown>;
    for (const [key, value] of Object.entries(obj)) res[toCase(c)(key)] = value;
    return res as ToCaseKeys<C, T>;
  };
const toCaseKeysDeep =
  <C extends Case>(c: C) =>
  <T extends Record<string, unknown>>(obj: T) => {
    const res = {} as Record<string, unknown>;
    for (const [key, value] of Object.entries(obj))
      res[toCase(c)(key)] =
        typeof value === 'object' && value !== null ? toCaseKeysDeep(c)(value as Record<string, unknown>) : value;
    return res as ToCaseKeysDeep<C, T>;
  };

export const to = <C extends Case>(c: C) => ({
  case: toCase(c),
  caseKeys: toCaseKeys(c),
  caseKeysDeep: toCaseKeysDeep(c),
});
