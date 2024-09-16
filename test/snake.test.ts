import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('snake to X', () => {
  const FROM = 'from_snake_case_to_x';

  test('camel', () => {
    expect(to.camel.case(FROM)).toEqual('fromSnakeCaseToX');
  });

  test('kebab', () => {
    expect(to.kebab.case(FROM)).toEqual('from-snake-case-to-x');
  });

  test('pascal', () => {
    expect(to.pascal.case(FROM)).toEqual('FromSnakeCaseToX');
  });

  test('snake', () => {
    expect(to.snake.case(FROM)).toEqual('from_snake_case_to_x');
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.case(FROM)).toEqual('FROM-SNAKE-CASE-TO-X');
  });

  test('upper-snake', () => {
    expect(to.upperSnake.case(FROM)).toEqual('FROM_SNAKE_CASE_TO_X');
  });
});
