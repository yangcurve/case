import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('upper kebab to X', () => {
  const FROM = 'FROM-UPPER-KEBAB-CASE-TO-X';

  test('camel', () => {
    expect(to.camel.case(FROM)).toEqual('fromUpperKebabCaseToX');
  });

  test('kebab', () => {
    expect(to.kebab.case(FROM)).toEqual('from-upper-kebab-case-to-x');
  });

  test('pascal', () => {
    expect(to.pascal.case(FROM)).toEqual('FromUpperKebabCaseToX');
  });

  test('snake', () => {
    expect(to.snake.case(FROM)).toEqual('from_upper_kebab_case_to_x');
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.case(FROM)).toEqual('FROM-UPPER-KEBAB-CASE-TO-X');
  });

  test('upper-snake', () => {
    expect(to.upperSnake.case(FROM)).toEqual('FROM_UPPER_KEBAB_CASE_TO_X');
  });
});
