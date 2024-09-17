import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('camel to X', () => {
  const FROM = 'fromCamelCaseToX';

  test('camel', () => {
    expect(to.camel.case(FROM)).toBe('fromCamelCaseToX');
  });

  test('kebab', () => {
    expect(to.kebab.case(FROM)).toBe('from-camel-case-to-x');
  });

  test('pascal', () => {
    expect(to.pascal.case(FROM)).toBe('FromCamelCaseToX');
  });

  test('snake', () => {
    expect(to.snake.case(FROM)).toBe('from_camel_case_to_x');
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.case(FROM)).toBe('FROM-CAMEL-CASE-TO-X');
  });

  test('upper-snake', () => {
    expect(to.upperSnake.case(FROM)).toBe('FROM_CAMEL_CASE_TO_X');
  });
});
