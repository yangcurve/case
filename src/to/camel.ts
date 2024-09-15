import type { From, Is } from '../case';

export type ToCamelCase<T extends string> = Is.CamelCase<T> extends true
  ? From.camel.to.Camel<T>
  : Is.KebabCase<T> extends true
    ? From.kebab.to.Camel<T>
    : Is.PascalCase<T> extends true
      ? From.pascal.to.Camel<T>
      : Is.SnakeCase<T> extends true
        ? From.snake.to.Camel<T>
        : Is.UpperKebabCase<T> extends true
          ? From.upperKebab.to.Camel<T>
          : Is.UpperSnakeCase<T> extends true
            ? From.upperSnake.to.Camel<T>
            : T;
