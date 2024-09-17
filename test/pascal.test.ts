import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('pascal to X', () => {
  const FROM = 'FromPascalCaseToX';

  test('camel', () => {
    const TO: to.camel.Case<typeof FROM> = 'fromPascalCaseToX';
    expect(to.camel.case(FROM)).toBe(TO);
  });

  test('kebab', () => {
    const TO: to.kebab.Case<typeof FROM> = 'from-pascal-case-to-x';
    expect(to.kebab.case(FROM)).toBe(TO);
  });

  test('pascal', () => {
    const TO: to.pascal.Case<typeof FROM> = 'FromPascalCaseToX';
    expect(to.pascal.case(FROM)).toBe(TO);
  });

  test('snake', () => {
    const TO: to.snake.Case<typeof FROM> = 'from_pascal_case_to_x';
    expect(to.snake.case(FROM)).toBe(TO);
  });

  test('upper-kebab', () => {
    const TO: to.upperKebab.Case<typeof FROM> = 'FROM-PASCAL-CASE-TO-X';
    expect(to.upperKebab.case(FROM)).toBe(TO);
  });

  test('upper-snake', () => {
    const TO: to.upperSnake.Case<typeof FROM> = 'FROM_PASCAL_CASE_TO_X';
    expect(to.upperSnake.case(FROM)).toBe(TO);
  });
});
