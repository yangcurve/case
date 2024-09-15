import type { From, Is } from '../case';

export type ToSnakeCase<T extends string> = Is.CamelCase<T> extends true
  ? From.camel.to.Snake<T>
  : Is.KebabCase<T> extends true
    ? From.kebab.to.Snake<T>
    : Is.PascalCase<T> extends true
      ? From.pascal.to.Snake<T>
      : Is.SnakeCase<T> extends true
        ? From.snake.to.Snake<T>
        : Is.UpperKebabCase<T> extends true
          ? From.upperKebab.to.Snake<T>
          : Is.UpperSnakeCase<T> extends true
            ? From.upperSnake.to.Snake<T>
            : T;
