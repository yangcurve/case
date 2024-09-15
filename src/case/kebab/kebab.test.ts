import { describe, expect, test } from 'bun:test';
import { kebab } from './from';
import { kebabCase } from './is';

describe('convert from kebab to X', () => {
  test('camel', () => {
    expect(kebab.to.camel('kebab-to-camel')).toBe('kebabToCamel');
  });

  test('kebab', () => {
    expect(kebab.to.kebab('kebab-to-kebab')).toBe('kebab-to-kebab');
  });

  test('pascal', () => {
    expect(kebab.to.pascal('kebab-to-pascal')).toBe('KebabToPascal');
  });

  test('snake', () => {
    expect(kebab.to.snake('kebab-to-snake')).toBe('kebab_to_snake');
  });

  test('upper kebab', () => {
    expect(kebab.to.upperKebab('kebab-to-upper-kebab')).toBe('KEBAB-TO-UPPER-KEBAB');
  });

  test('upper snake', () => {
    expect(kebab.to.upperSnake('kebab-to-upper-snake')).toBe('KEBAB_TO_UPPER_SNAKE');
  });
});

describe('is X kebab', () => {
  test('empty string', () => {
    expect(kebabCase('')).toBe(false);
  });

  test('string with white space', () => {
    expect(kebabCase('string with white space')).toBe(false);
  });

  test('camel', () => {
    expect(kebabCase('isCamelKebab')).toBe(false);
  });

  test('kebab', () => {
    expect(kebabCase('is-kebab-kebab')).toBe(true);
  });

  test('pascal', () => {
    expect(kebabCase('IsPascalKebab')).toBe(false);
  });

  test('snake', () => {
    expect(kebabCase('is_snake_kebab')).toBe(false);
  });

  test('upper kebab', () => {
    expect(kebabCase('IS-UPPER-KEBAB-KEBAB')).toBe(false);
  });

  test('upper snake', () => {
    expect(kebabCase('IS_UPPER_SNAKE_KEBAB')).toBe(false);
  });
});
