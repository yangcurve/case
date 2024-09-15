import { describe, expect, test } from 'bun:test';
import { camel } from './from';
import { camelCase } from './is';

describe('convert from camel to X', () => {
  test('camel', () => {
    expect(camel.to.camel('camelToCamel')).toBe('camelToCamel');
  });

  test('kebab', () => {
    expect(camel.to.kebab('camelToKebab')).toBe('camel-to-kebab');
  });

  test('pascal', () => {
    expect(camel.to.pascal('camelToPascal')).toBe('CamelToPascal');
  });

  test('snake', () => {
    expect(camel.to.snake('camelToSnake')).toBe('camel_to_snake');
  });

  test('upper kebab', () => {
    expect(camel.to.upperKebab('camelToUpperKebab')).toBe('CAMEL-TO-UPPER-KEBAB');
  });

  test('upper snake', () => {
    expect(camel.to.upperSnake('camelToUpperSnake')).toBe('CAMEL_TO_UPPER_SNAKE');
  });
});

describe('is X camel', () => {
  test('empty string', () => {
    expect(camelCase('')).toBe(false);
  });

  test('string with white space', () => {
    expect(camelCase('string with white space')).toBe(false);
  });

  test('camel', () => {
    expect(camelCase('isCamelCamel')).toBe(true);
  });

  test('kebab', () => {
    expect(camelCase('is-kebab-camel')).toBe(false);
  });

  test('pascal', () => {
    expect(camelCase('IsPascalCamel')).toBe(false);
  });

  test('snake', () => {
    expect(camelCase('is_snake_camel')).toBe(false);
  });

  test('upper kebab', () => {
    expect(camelCase('IS_UPPER_KEBAB_CAMEL')).toBe(false);
  });

  test('upper snake', () => {
    expect(camelCase('IS_UPPER_SNAKE_CAMEL')).toBe(false);
  });
});
