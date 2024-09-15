import { describe, expect, test } from 'bun:test';
import { upperKebab } from './from';
import { upperKebabCase } from './is';

describe('convert from upper kebab to X', () => {
  test('camel', () => {
    expect(upperKebab.to.camel('UPPER-KEBAB-TO-CAMEL')).toBe('upperKebabToCamel');
  });

  test('kebab', () => {
    expect(upperKebab.to.kebab('UPPER-KEBAB-TO-KEBAB')).toBe('upper-kebab-to-kebab');
  });

  test('pascal', () => {
    expect(upperKebab.to.pascal('UPPER-KEBAB-TO-PASCAL')).toBe('UpperKebabToPascal');
  });

  test('snake', () => {
    expect(upperKebab.to.snake('UPPER-KEBAB-TO-SNAKE')).toBe('upper_kebab_to_snake');
  });

  test('upper kebab', () => {
    expect(upperKebab.to.upperKebab('UPPER-KEBAB-TO-UPPER-KEBAB')).toBe('UPPER-KEBAB-TO-UPPER-KEBAB');
  });

  test('upper snake', () => {
    expect(upperKebab.to.upperSnake('UPPER-KEBAB-TO-UPPER-SNAKE')).toBe('UPPER_KEBAB_TO_UPPER_SNAKE');
  });
});

describe('is X upper kebab', () => {
  test('empty string', () => {
    expect(upperKebabCase('')).toBe(false);
  });

  test('string with white space', () => {
    expect(upperKebabCase('string with white space')).toBe(false);
  });

  test('camel', () => {
    expect(upperKebabCase('isCamelUpperKebab')).toBe(false);
  });

  test('kebab', () => {
    expect(upperKebabCase('is-kebab-upper-kebab')).toBe(false);
  });

  test('pascal', () => {
    expect(upperKebabCase('IsPascalUpperKebab')).toBe(false);
  });

  test('snake', () => {
    expect(upperKebabCase('is_snake_upper_kebab')).toBe(false);
  });

  test('upper kebab', () => {
    expect(upperKebabCase('IS-UPPER-KEBAB-UPPER-KEBAB')).toBe(true);
  });

  test('upper snake', () => {
    expect(upperKebabCase('IS_UPPER_SNAKE_UPPER_KEBAB')).toBe(false);
  });
});
