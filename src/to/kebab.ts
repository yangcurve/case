import type { From, Is } from '../case';

export type ToKebabCase<T extends string> = Is.CamelCase<T> extends true
  ? From.camel.to.Kebab<T>
  : Is.KebabCase<T> extends true
    ? From.kebab.to.Kebab<T>
    : Is.PascalCase<T> extends true
      ? From.pascal.to.Kebab<T>
      : Is.SnakeCase<T> extends true
        ? From.snake.to.Kebab<T>
        : Is.UpperKebabCase<T> extends true
          ? From.upperKebab.to.Kebab<T>
          : Is.UpperSnakeCase<T> extends true
            ? From.upperSnake.to.Kebab<T>
            : T;
