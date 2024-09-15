import { describe, expect, test } from 'bun:test';
import { snake } from './from';
import { snakeCase } from './is';

describe('convert from snake to X', () => {
  test('camel', () => {
    expect(snake.to.camel('snake_to_camel')).toBe('snakeToCamel');
  });

  test('kebab', () => {
    expect(snake.to.kebab('snake_to_kebab')).toBe('snake-to-kebab');
  });

  test('pascal', () => {
    expect(snake.to.pascal('snake_to_pascal')).toBe('SnakeToPascal');
  });

  test('snake', () => {
    expect(snake.to.snake('snake_to_snake')).toBe('snake_to_snake');
  });

  test('upper kebab', () => {
    expect(snake.to.upperKebab('snake_to_upper_kebab')).toBe('SNAKE-TO-UPPER-KEBAB');
  });

  test('upper snake', () => {
    expect(snake.to.upperSnake('snake_to_upper_snake')).toBe('SNAKE_TO_UPPER_SNAKE');
  });
});

describe('is X snake', () => {
  test('empty string', () => {
    expect(snakeCase('')).toBe(false);
  });

  test('string with white space', () => {
    expect(snakeCase('string with white space')).toBe(false);
  });

  test('camel', () => {
    expect(snakeCase('isCamelSnake')).toBe(false);
  });

  test('kebab', () => {
    expect(snakeCase('is-kebab-snake')).toBe(false);
  });

  test('pascal', () => {
    expect(snakeCase('IsPascalSnake')).toBe(false);
  });

  test('snake', () => {
    expect(snakeCase('is_snake_snake')).toBe(true);
  });

  test('upper kebab', () => {
    expect(snakeCase('IS-UPPER-KEBAB-SNAKE')).toBe(false);
  });

  test('upper snake', () => {
    expect(snakeCase('IS_UPPER_SNAKE_SNAKE')).toBe(false);
  });
});
