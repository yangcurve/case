import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('pascal to X', () => {
  const FROM = 'FromPascalCaseToX';

  test('camel', () => {
    expect(to.camel.case(FROM)).toBe('fromPascalCaseToX');
  });

  test('kebab', () => {
    expect(to.kebab.case(FROM)).toBe('from-pascal-case-to-x');
  });

  test('pascal', () => {
    expect(to.pascal.case(FROM)).toBe('FromPascalCaseToX');
  });

  test('snake', () => {
    expect(to.snake.case(FROM)).toBe('from_pascal_case_to_x');
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.case(FROM)).toBe('FROM-PASCAL-CASE-TO-X');
  });

  test('upper-snake', () => {
    expect(to.upperSnake.case(FROM)).toBe('FROM_PASCAL_CASE_TO_X');
  });
});
