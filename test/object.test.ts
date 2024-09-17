import { describe, expect, test } from 'bun:test';
import { to } from '../src';

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
  };

  test('camel', () => {
    const TO: to.camel.Object<typeof FROM> = {
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
    };
    expect(to.camel.object(FROM)).toEqual(TO);
  });

  test('kebab', () => {
    const TO: to.kebab.Object<typeof FROM> = {
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
    };
    expect(to.kebab.object(FROM)).toEqual(TO);
  });

  test('pascal', () => {
    const TO: to.pascal.Object<typeof FROM> = {
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
    };
    expect(to.pascal.object(FROM)).toEqual(TO);
  });

  test('snake', () => {
    const TO: to.snake.Object<typeof FROM> = {
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
    };
    expect(to.snake.object(FROM)).toEqual(TO);
  });

  test('upper-kebab', () => {
    const TO: to.upperKebab.Object<typeof FROM> = {
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
    };
    expect(to.upperKebab.object(FROM)).toEqual(TO);
  });

  test('upper-snake', () => {
    const TO: to.upperSnake.Object<typeof FROM> = {
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
    };
    expect(to.upperSnake.object(FROM)).toEqual(TO);
  });
});
