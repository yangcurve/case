import { describe, expect, test } from 'bun:test'
import { to } from '../src'

describe('upper kebab to X', () => {
  const FROM = 'FROM-UPPER-KEBAB-CASE-TO-X'

  test('camel', () => {
    const TO: to.Camel<typeof FROM> = 'fromUpperKebabCaseToX'
    expect(to.camel(FROM)).toBe(TO)
  })

  test('kebab', () => {
    const TO: to.Kebab<typeof FROM> = 'from-upper-kebab-case-to-x'
    expect(to.kebab(FROM)).toBe(TO)
  })

  test('pascal', () => {
    const TO: to.Pascal<typeof FROM> = 'FromUpperKebabCaseToX'
    expect(to.pascal(FROM)).toBe(TO)
  })

  test('snake', () => {
    const TO: to.Snake<typeof FROM> = 'from_upper_kebab_case_to_x'
    expect(to.snake(FROM)).toBe(TO)
  })

  test('upper-kebab', () => {
    const TO: to.UpperKebab<typeof FROM> = 'FROM-UPPER-KEBAB-CASE-TO-X'
    expect(to.upperKebab(FROM)).toBe(TO)
  })

  test('upper-snake', () => {
    const TO: to.UpperSnake<typeof FROM> = 'FROM_UPPER_KEBAB_CASE_TO_X'
    expect(to.upperSnake(FROM)).toBe(TO)
  })
})
