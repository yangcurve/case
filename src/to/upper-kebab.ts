import type { From, Is } from '../case';

export type ToUpperKebabCase<T extends string> = Is.CamelCase<T> extends true
  ? From.camel.to.UpperKebab<T>
  : Is.KebabCase<T> extends true
    ? From.kebab.to.UpperKebab<T>
    : Is.PascalCase<T> extends true
      ? From.pascal.to.UpperKebab<T>
      : Is.SnakeCase<T> extends true
        ? From.snake.to.UpperKebab<T>
        : Is.UpperKebabCase<T> extends true
          ? From.upperKebab.to.UpperKebab<T>
          : Is.UpperSnakeCase<T> extends true
            ? From.upperSnake.to.UpperKebab<T>
            : T;
