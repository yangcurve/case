import { describe, expect, test } from 'bun:test'
import { to } from '../src'

describe('object to X', () => {
  const FROM = {
    camelCaseKey: {
      'kebab-case-key': [
        {
          PascalCaseKey: {
            snake_case_key: [
              {
                'UPPER-KEBAB-CASE-KEY': {
                  UPPER_SNAKE_CASE_KEY: 0,
                },
              },
            ],
          },
        },
      ],
    },
  }

  test('camel', () => {
    const TO = {
      camelCaseKey: {
        kebabCaseKey: [
          {
            pascalCaseKey: {
              snakeCaseKey: [
                {
                  upperKebabCaseKey: {
                    upperSnakeCaseKey: 0,
                  },
                },
              ],
            },
          },
        ],
      },
    } satisfies to.Camel<typeof FROM>
    expect(to.camel(FROM)).toEqual(TO)
  })

  test('kebab', () => {
    const TO = {
      'camel-case-key': {
        'kebab-case-key': [
          {
            'pascal-case-key': {
              'snake-case-key': [
                {
                  'upper-kebab-case-key': {
                    'upper-snake-case-key': 0,
                  },
                },
              ],
            },
          },
        ],
      },
    } satisfies to.Kebab<typeof FROM>
    expect(to.kebab(FROM)).toEqual(TO)
  })

  test('pascal', () => {
    const TO: to.Pascal<typeof FROM> = {
      CamelCaseKey: {
        KebabCaseKey: [
          {
            PascalCaseKey: {
              SnakeCaseKey: [
                {
                  UpperKebabCaseKey: {
                    UpperSnakeCaseKey: 0,
                  },
                },
              ],
            },
          },
        ],
      },
    }
    expect(to.pascal(FROM)).toEqual(TO)
  })

  test('snake', () => {
    const TO = {
      camel_case_key: {
        kebab_case_key: [
          {
            pascal_case_key: {
              snake_case_key: [
                {
                  upper_kebab_case_key: {
                    upper_snake_case_key: 0,
                  },
                },
              ],
            },
          },
        ],
      },
    } satisfies to.Snake<typeof FROM>
    expect(to.snake(FROM)).toEqual(TO)
  })

  test('upper-kebab', () => {
    const TO = {
      'CAMEL-CASE-KEY': {
        'KEBAB-CASE-KEY': [
          {
            'PASCAL-CASE-KEY': {
              'SNAKE-CASE-KEY': [
                {
                  'UPPER-KEBAB-CASE-KEY': {
                    'UPPER-SNAKE-CASE-KEY': 0,
                  },
                },
              ],
            },
          },
        ],
      },
    } satisfies to.UpperKebab<typeof FROM>
    expect(to.upperKebab(FROM)).toEqual(TO)
  })

  test('upper-snake', () => {
    const TO = {
      CAMEL_CASE_KEY: {
        KEBAB_CASE_KEY: [
          {
            PASCAL_CASE_KEY: {
              SNAKE_CASE_KEY: [
                {
                  UPPER_KEBAB_CASE_KEY: {
                    UPPER_SNAKE_CASE_KEY: 0,
                  },
                },
              ],
            },
          },
        ],
      },
    } satisfies to.UpperSnake<typeof FROM>
    expect(to.upperSnake(FROM)).toEqual(TO)
  })
})
