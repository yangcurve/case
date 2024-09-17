import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('kebab to X', () => {
  const FROM = 'from-kebab-case-to-x';

  test('camel', () => {
    expect(to.camel.case(FROM)).toBe('fromKebabCaseToX');
  });

  test('kebab', () => {
    expect(to.kebab.case(FROM)).toBe('from-kebab-case-to-x');
  });

  test('pascal', () => {
    expect(to.pascal.case(FROM)).toBe('FromKebabCaseToX');
  });

  test('snake', () => {
    expect(to.snake.case(FROM)).toBe('from_kebab_case_to_x');
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.case(FROM)).toBe('FROM-KEBAB-CASE-TO-X');
  });

  test('upper-snake', () => {
    expect(to.upperSnake.case(FROM)).toBe('FROM_KEBAB_CASE_TO_X');
  });
});
