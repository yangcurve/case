import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('kebab to X', () => {
  const FROM = 'from-kebab-case-to-x';

  test('camel', () => {
    expect(to.camel.case(FROM)).toEqual('fromKebabCaseToX');
  });

  test('kebab', () => {
    expect(to.kebab.case(FROM)).toEqual('from-kebab-case-to-x');
  });

  test('pascal', () => {
    expect(to.pascal.case(FROM)).toEqual('FromKebabCaseToX');
  });

  test('snake', () => {
    expect(to.snake.case(FROM)).toEqual('from_kebab_case_to_x');
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.case(FROM)).toEqual('FROM-KEBAB-CASE-TO-X');
  });

  test('upper-snake', () => {
    expect(to.upperSnake.case(FROM)).toEqual('FROM_KEBAB_CASE_TO_X');
  });
});
