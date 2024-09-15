import type { From, Is } from '../case';

export type ToUpperSnakeCase<T extends string> = Is.CamelCase<T> extends true
  ? From.camel.to.UpperSnake<T>
  : Is.KebabCase<T> extends true
    ? From.kebab.to.UpperSnake<T>
    : Is.PascalCase<T> extends true
      ? From.pascal.to.UpperSnake<T>
      : Is.SnakeCase<T> extends true
        ? From.snake.to.UpperSnake<T>
        : Is.UpperKebabCase<T> extends true
          ? From.upperKebab.to.UpperSnake<T>
          : Is.UpperSnakeCase<T> extends true
            ? From.upperSnake.to.UpperSnake<T>
            : T;
