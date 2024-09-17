import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('upper kebab to X', () => {
  const FROM = 'FROM-UPPER-KEBAB-CASE-TO-X';

  test('camel', () => {
    expect(to.camel.case(FROM)).toBe('fromUpperKebabCaseToX');
  });

  test('kebab', () => {
    expect(to.kebab.case(FROM)).toBe('from-upper-kebab-case-to-x');
  });

  test('pascal', () => {
    expect(to.pascal.case(FROM)).toBe('FromUpperKebabCaseToX');
  });

  test('snake', () => {
    expect(to.snake.case(FROM)).toBe('from_upper_kebab_case_to_x');
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.case(FROM)).toBe('FROM-UPPER-KEBAB-CASE-TO-X');
  });

  test('upper-snake', () => {
    expect(to.upperSnake.case(FROM)).toBe('FROM_UPPER_KEBAB_CASE_TO_X');
  });
});
