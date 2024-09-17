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
    expect(to.camel.object(FROM)).toEqual({
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
    });

    test('kebab', () => {
      expect(to.kebab.object(FROM)).toEqual({
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
      });
    });

    test('pascal', () => {
      expect(to.pascal.object(FROM)).toEqual({
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
      });
    });

    test('snake', () => {
      expect(to.snake.object(FROM)).toEqual({
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
      });
    });

    test('upper-kebab', () => {
      expect(to.upperKebab.object(FROM)).toEqual({
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
      });
    });

    test('upper-snake', () => {
      expect(to.upperSnake.object(FROM)).toEqual({
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
      });
    });
  });
});
