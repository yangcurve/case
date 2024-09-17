import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('snake to X', () => {
  const FROM = 'from_snake_case_to_x';

  test('camel', () => {
    const TO: to.camel.Case<typeof FROM> = 'fromSnakeCaseToX'
    expect(to.camel.case(FROM)).toBe(TO);
  });

  test('kebab', () => {
    const TO: to.kebab.Case<typeof FROM> = 'from-snake-case-to-x'
    expect(to.kebab.case(FROM)).toBe(TO);
  });

  test('pascal', () => {
    const TO: to.pascal.Case<typeof FROM> = 'FromSnakeCaseToX'
    expect(to.pascal.case(FROM)).toBe(TO);
  });

  test('snake', () => {
    const TO: to.snake.Case<typeof FROM> = 'from_snake_case_to_x'
    expect(to.snake.case(FROM)).toBe(TO);
  });

  test('upper-kebab', () => {
    const TO: to.upperKebab.Case<typeof FROM> = 'FROM-SNAKE-CASE-TO-X'
    expect(to.upperKebab.case(FROM)).toBe(TO);
  });

  test('upper-snake', () => {
    const TO: to.upperSnake.Case<typeof FROM> = 'FROM_SNAKE_CASE_TO_X'
    expect(to.upperSnake.case(FROM)).toBe(TO);
  });
});
