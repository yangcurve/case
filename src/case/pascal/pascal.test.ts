import { describe, expect, test } from 'bun:test';
import { pascal } from './from';
import { pascalCase } from './is';

describe('convert from pascal to X', () => {
  test('camel', () => {
    expect(pascal.to.camel('PascalToCamel')).toBe('pascalToCamel');
  });

  test('kebab', () => {
    expect(pascal.to.kebab('PascalToKebab')).toBe('pascal-to-kebab');
  });

  test('pascal', () => {
    expect(pascal.to.pascal('PascalToPascal')).toBe('PascalToPascal');
  });

  test('snake', () => {
    expect(pascal.to.snake('PascalToSnake')).toBe('pascal_to_snake');
  });

  test('upper kebab', () => {
    expect(pascal.to.upperKebab('PascalToUpperKebab')).toBe('PASCAL-TO-UPPER-KEBAB');
  });

  test('upper snake', () => {
    expect(pascal.to.upperSnake('PascalToUpperSnake')).toBe('PASCAL_TO_UPPER_SNAKE');
  });
});

describe('is X pascal', () => {
  test('empty string', () => {
    expect(pascalCase('')).toBe(false);
  });

  test('string with white space', () => {
    expect(pascalCase('string with white space')).toBe(false);
  });

  test('camel', () => {
    expect(pascalCase('isCamelPascal')).toBe(false);
  });

  test('kebab', () => {
    expect(pascalCase('is-kebab-pascal')).toBe(false);
  });

  test('pascal', () => {
    expect(pascalCase('IsPascalPascal')).toBe(true);
  });

  test('snake', () => {
    expect(pascalCase('is_snake_pascal')).toBe(false);
  });

  test('upper kebab', () => {
    expect(pascalCase('IS-UPPER-KEBAB-PASCAL')).toBe(false);
  });

  test('upper snake', () => {
    expect(pascalCase('IS_UPPER_SNAKE_PASCAL')).toBe(false);
  });
});
