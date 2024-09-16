import { type IsConvertable, capitalize, isConvertable } from '../utils';
import { type ToCamelCase, toCamelCase } from './camel';

export type ToPascalCase<T> = T extends string ? (IsConvertable<T> extends true ? Capitalize<ToCamelCase<T>> : T) : T;

export const toPascalCase = <T extends string>(str: T) =>
  (isConvertable(str) ? capitalize(toCamelCase(str)) : str) as ToPascalCase<T>;
