import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('camel to X', () => {
  const FROM = 'fromCamelCaseToX';

  test('camel', () => {
    expect(to.camel.case(FROM)).toEqual('fromCamelCaseToX');
  });

  test('kebab', () => {
    expect(to.kebab.case(FROM)).toEqual('from-camel-case-to-x');
  });

  test('pascal', () => {
    expect(to.pascal.case(FROM)).toEqual('FromCamelCaseToX');
  });

  test('snake', () => {
    expect(to.snake.case(FROM)).toEqual('from_camel_case_to_x');
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.case(FROM)).toEqual('FROM-CAMEL-CASE-TO-X');
  });

  test('upper-snake', () => {
    expect(to.upperSnake.case(FROM)).toEqual('FROM_CAMEL_CASE_TO_X');
  });
});
