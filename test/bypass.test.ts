import { describe, expect, test } from 'bun:test'
import { to } from '../src'

describe('empty string to X', () => {
  const FROM = ''
  const TO = FROM

  test('camel', () => {
    expect(to.camel(FROM)).toBe(TO)
  })

  test('kebab', () => {
    expect(to.kebab(FROM)).toBe(TO)
  })

  test('pascal', () => {
    expect(to.pascal(FROM)).toBe(TO)
  })

  test('snake', () => {
    expect(to.snake(FROM)).toBe(TO)
  })

  test('upper-kebab', () => {
    expect(to.upperKebab(FROM)).toBe(TO)
  })

  test('upper-snake', () => {
    expect(to.upperSnake(FROM)).toBe(TO)
  })
})

describe('string with white space to X', () => {
  const FROM = 'string with white space'
  const TO = FROM

  test('camel', () => {
    expect(to.camel(FROM)).toBe(TO)
  })

  test('kebab', () => {
    expect(to.kebab(FROM)).toBe(TO)
  })

  test('pascal', () => {
    expect(to.pascal(FROM)).toBe(TO)
  })

  test('snake', () => {
    expect(to.snake(FROM)).toBe(TO)
  })

  test('upper-kebab', () => {
    expect(to.upperKebab(FROM)).toBe(TO)
  })

  test('upper-snake', () => {
    expect(to.upperSnake(FROM)).toBe(TO)
  })
})

describe('mixed case to X', () => {
  const FROM = 'mixed_with_underscore-and-dash'
  const TO = FROM

  test('camel', () => {
    expect(to.camel(FROM)).toBe(TO)
  })

  test('kebab', () => {
    expect(to.kebab(FROM)).toBe(TO)
  })

  test('pascal', () => {
    expect(to.pascal(FROM)).toBe(TO)
  })

  test('snake', () => {
    expect(to.snake(FROM)).toBe(TO)
  })

  test('upper-kebab', () => {
    expect(to.upperKebab(FROM)).toBe(TO)
  })

  test('upper-snake', () => {
    expect(to.upperSnake(FROM)).toBe(TO)
  })
})
