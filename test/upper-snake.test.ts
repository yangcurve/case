import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('upper snake to X', () => {
  const FROM = 'FROM_UPPER_SNAKE_CASE_TO_X';

  test('camel', () => {
    expect(to.camel.case(FROM)).toBe('fromUpperSnakeCaseToX');
  });

  test('kebab', () => {
    expect(to.kebab.case(FROM)).toBe('from-upper-snake-case-to-x');
  });

  test('pascal', () => {
    expect(to.pascal.case(FROM)).toBe('FromUpperSnakeCaseToX');
  });

  test('snake', () => {
    expect(to.snake.case(FROM)).toBe('from_upper_snake_case_to_x');
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.case(FROM)).toBe('FROM-UPPER-SNAKE-CASE-TO-X');
  });

  test('upper-snake', () => {
    expect(to.upperSnake.case(FROM)).toBe('FROM_UPPER_SNAKE_CASE_TO_X');
  });
});
