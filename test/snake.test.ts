import { describe, expect, test } from 'bun:test'
import { to } from '../src'

describe('snake to X', () => {
  const FROM = 'from_snake_case_to_x'

  test('camel', () => {
    const TO: to.Camel<typeof FROM> = 'fromSnakeCaseToX'
    expect(to.camel(FROM)).toBe(TO)
  })

  test('kebab', () => {
    const TO: to.Kebab<typeof FROM> = 'from-snake-case-to-x'
    expect(to.kebab(FROM)).toBe(TO)
  })

  test('pascal', () => {
    const TO: to.Pascal<typeof FROM> = 'FromSnakeCaseToX'
    expect(to.pascal(FROM)).toBe(TO)
  })

  test('snake', () => {
    const TO: to.Snake<typeof FROM> = 'from_snake_case_to_x'
    expect(to.snake(FROM)).toBe(TO)
  })

  test('upper-kebab', () => {
    const TO: to.UpperKebab<typeof FROM> = 'FROM-SNAKE-CASE-TO-X'
    expect(to.upperKebab(FROM)).toBe(TO)
  })

  test('upper-snake', () => {
    const TO: to.UpperSnake<typeof FROM> = 'FROM_SNAKE_CASE_TO_X'
    expect(to.upperSnake(FROM)).toBe(TO)
  })
})
