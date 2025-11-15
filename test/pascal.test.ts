import { describe, expect, test } from 'bun:test'
import { to } from '../src'

describe('pascal to X', () => {
  const FROM = 'FromPascalCaseToX'

  test('camel', () => {
    const TO: to.Camel<typeof FROM> = 'fromPascalCaseToX'
    expect(to.camel(FROM)).toBe(TO)
  })

  test('kebab', () => {
    const TO: to.Kebab<typeof FROM> = 'from-pascal-case-to-x'
    expect(to.kebab(FROM)).toBe(TO)
  })

  test('pascal', () => {
    const TO: to.Pascal<typeof FROM> = 'FromPascalCaseToX'
    expect(to.pascal(FROM)).toBe(TO)
  })

  test('snake', () => {
    const TO: to.Snake<typeof FROM> = 'from_pascal_case_to_x'
    expect(to.snake(FROM)).toBe(TO)
  })

  test('upper-kebab', () => {
    const TO: to.UpperKebab<typeof FROM> = 'FROM-PASCAL-CASE-TO-X'
    expect(to.upperKebab(FROM)).toBe(TO)
  })

  test('upper-snake', () => {
    const TO: to.UpperSnake<typeof FROM> = 'FROM_PASCAL_CASE_TO_X'
    expect(to.upperSnake(FROM)).toBe(TO)
  })
})
