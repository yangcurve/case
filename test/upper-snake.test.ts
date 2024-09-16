import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('upper snake to X', () => {
  const FROM = 'FROM_UPPER_SNAKE_CASE_TO_X';

  test('camel', () => {
    expect(to.camel.case(FROM)).toEqual('fromUpperSnakeCaseToX');
  });

  test('kebab', () => {
    expect(to.kebab.case(FROM)).toEqual('from-upper-snake-case-to-x');
  });

  test('pascal', () => {
    expect(to.pascal.case(FROM)).toEqual('FromUpperSnakeCaseToX');
  });

  test('snake', () => {
    expect(to.snake.case(FROM)).toEqual('from_upper_snake_case_to_x');
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.case(FROM)).toEqual('FROM-UPPER-SNAKE-CASE-TO-X');
  });

  test('upper-snake', () => {
    expect(to.upperSnake.case(FROM)).toEqual('FROM_UPPER_SNAKE_CASE_TO_X');
  });
});
