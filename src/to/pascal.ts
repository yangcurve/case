import type { From, Is } from '../case';

export type ToPascalCase<T extends string> = Is.CamelCase<T> extends true
  ? From.camel.to.Pascal<T>
  : Is.KebabCase<T> extends true
    ? From.kebab.to.Pascal<T>
    : Is.PascalCase<T> extends true
      ? From.pascal.to.Pascal<T>
      : Is.SnakeCase<T> extends true
        ? From.snake.to.Pascal<T>
        : Is.UpperKebabCase<T> extends true
          ? From.upperKebab.to.Pascal<T>
          : Is.UpperSnakeCase<T> extends true
            ? From.upperSnake.to.Pascal<T>
            : T;
