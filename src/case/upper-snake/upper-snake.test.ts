import { describe, expect, test } from 'bun:test';
import { upperSnake } from './from';
import { upperSnakeCase } from './is';

describe('convert from upper snake to X', () => {
  test('camel', () => {
    expect(upperSnake.to.camel('UPPER_SNAKE_TO_CAMEL')).toBe('upperSnakeToCamel');
  });

  test('kebab', () => {
    expect(upperSnake.to.kebab('UPPER_SNAKE_TO_KEBAB')).toBe('upper-snake-to-kebab');
  });

  test('pascal', () => {
    expect(upperSnake.to.pascal('UPPER_SNAKE_TO_PASCAL')).toBe('UpperSnakeToPascal');
  });

  test('snake', () => {
    expect(upperSnake.to.snake('UPPER_SNAKE_TO_SNAKE')).toBe('upper_snake_to_snake');
  });

  test('upper kebab', () => {
    expect(upperSnake.to.upperKebab('UPPER_SNAKE_TO_UPPER_KEBAB')).toBe('UPPER-SNAKE-TO-UPPER-KEBAB');
  });

  test('upper snake', () => {
    expect(upperSnake.to.upperSnake('UPPER_SNAKE_TO_UPPER_SNAKE')).toBe('UPPER_SNAKE_TO_UPPER_SNAKE');
  });
});

describe('is X upper snake', () => {
  test('empty string', () => {
    expect(upperSnakeCase('')).toBe(false);
  });

  test('string with white space', () => {
    expect(upperSnakeCase('string with white space')).toBe(false);
  });

  test('camel', () => {
    expect(upperSnakeCase('isCamelUpperSnake')).toBe(false);
  });

  test('kebab', () => {
    expect(upperSnakeCase('is-kebab-upper-snake')).toBe(false);
  });

  test('pascal', () => {
    expect(upperSnakeCase('IsPascalUpperSnake')).toBe(false);
  });

  test('snake', () => {
    expect(upperSnakeCase('is_snake_upper_snake')).toBe(false);
  });

  test('upper kebab', () => {
    expect(upperSnakeCase('IS-UPPER-KEBAB-UPPER-SNAKE')).toBe(false);
  });

  test('upper snake', () => {
    expect(upperSnakeCase('IS_UPPER_SNAKE_UPPER_SNAKE')).toBe(true);
  });
});
