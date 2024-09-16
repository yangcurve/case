import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('pascal to X', () => {
  const FROM = 'FromPascalCaseToX';

  test('camel', () => {
    expect(to.camel.case(FROM)).toEqual('fromPascalCaseToX');
  });

  test('kebab', () => {
    expect(to.kebab.case(FROM)).toEqual('from-pascal-case-to-x');
  });

  test('pascal', () => {
    expect(to.pascal.case(FROM)).toEqual('FromPascalCaseToX');
  });

  test('snake', () => {
    expect(to.snake.case(FROM)).toEqual('from_pascal_case_to_x');
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.case(FROM)).toEqual('FROM-PASCAL-CASE-TO-X');
  });

  test('upper-snake', () => {
    expect(to.upperSnake.case(FROM)).toEqual('FROM_PASCAL_CASE_TO_X');
  });
});
