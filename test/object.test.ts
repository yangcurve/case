import { describe, expect, test } from 'bun:test';
import { to } from '../src';

describe('flat object to X', () => {
  const FROM = {
    camelCaseKey: 0,
    'kebab-case-key': 0,
    PascalCaseKey: 0,
    snake_case_key: 0,
    'UPPER-KEBAB-CASE-KEY': 0,
    UPPER_SNAKE_CASE_KEY: 0,
  };

  test('camel', () => {
    expect(to.camel.caseKeys(FROM)).toEqual({
      camelCaseKey: 0,
      kebabCaseKey: 0,
      pascalCaseKey: 0,
      snakeCaseKey: 0,
      upperKebabCaseKey: 0,
      upperSnakeCaseKey: 0,
    });
  });

  test('kebab', () => {
    expect(to.kebab.caseKeys(FROM)).toEqual({
      'camel-case-key': 0,
      'kebab-case-key': 0,
      'pascal-case-key': 0,
      'snake-case-key': 0,
      'upper-kebab-case-key': 0,
      'upper-snake-case-key': 0,
    });
  });

  test('pascal', () => {
    expect(to.pascal.caseKeys(FROM)).toEqual({
      CamelCaseKey: 0,
      KebabCaseKey: 0,
      PascalCaseKey: 0,
      SnakeCaseKey: 0,
      UpperKebabCaseKey: 0,
      UpperSnakeCaseKey: 0,
    });
  });

  test('snake', () => {
    expect(to.snake.caseKeys(FROM)).toEqual({
      camel_case_key: 0,
      kebab_case_key: 0,
      pascal_case_key: 0,
      snake_case_key: 0,
      upper_kebab_case_key: 0,
      upper_snake_case_key: 0,
    });
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.caseKeys(FROM)).toEqual({
      'CAMEL-CASE-KEY': 0,
      'KEBAB-CASE-KEY': 0,
      'PASCAL-CASE-KEY': 0,
      'SNAKE-CASE-KEY': 0,
      'UPPER-KEBAB-CASE-KEY': 0,
      'UPPER-SNAKE-CASE-KEY': 0,
    });
  });

  test('upper-snake', () => {
    expect(to.upperSnake.caseKeys(FROM)).toEqual({
      CAMEL_CASE_KEY: 0,
      KEBAB_CASE_KEY: 0,
      PASCAL_CASE_KEY: 0,
      SNAKE_CASE_KEY: 0,
      UPPER_KEBAB_CASE_KEY: 0,
      UPPER_SNAKE_CASE_KEY: 0,
    });
  });
});

describe('nested object to X', () => {
  const FROM = {
    camelCaseKey: {
      'kebab-case-key': {
        PascalCaseKey: {
          snake_case_key: {
            'UPPER-KEBAB-CASE-KEY': {
              UPPER_SNAKE_CASE_KEY: 0,
            },
          },
        },
      },
    },
  };

  test('camel', () => {
    expect(to.camel.caseKeys(FROM)).toEqual({
      camelCaseKey: {
        kebabCaseKey: {
          pascalCaseKey: {
            snakeCaseKey: {
              upperKebabCaseKey: {
                upperSnakeCaseKey: 0,
              },
            },
          },
        },
      },
    });
  });

  test('kebab', () => {
    expect(to.kebab.caseKeys(FROM)).toEqual({
      'camel-case-key': {
        'kebab-case-key': {
          'pascal-case-key': {
            'snake-case-key': {
              'upper-kebab-case-key': {
                'upper-snake-case-key': 0,
              },
            },
          },
        },
      },
    });
  });

  test('pascal', () => {
    expect(to.pascal.caseKeys(FROM)).toEqual({
      CamelCaseKey: {
        KebabCaseKey: {
          PascalCaseKey: {
            SnakeCaseKey: {
              UpperKebabCaseKey: {
                UpperSnakeCaseKey: 0,
              },
            },
          },
        },
      },
    });
  });

  test('snake', () => {
    expect(to.snake.caseKeys(FROM)).toEqual({
      camel_case_key: {
        kebab_case_key: {
          pascal_case_key: {
            snake_case_key: {
              upper_kebab_case_key: {
                upper_snake_case_key: 0,
              },
            },
          },
        },
      },
    });
  });

  test('upper-kebab', () => {
    expect(to.upperKebab.caseKeys(FROM)).toEqual({
      'CAMEL-CASE-KEY': {
        'KEBAB-CASE-KEY': {
          'PASCAL-CASE-KEY': {
            'SNAKE-CASE-KEY': {
              'UPPER-KEBAB-CASE-KEY': {
                'UPPER-SNAKE-CASE-KEY': 0,
              },
            },
          },
        },
      },
    });
  });

  test('upper-snake', () => {
    expect(to.upperSnake.caseKeys(FROM)).toEqual({
      CAMEL_CASE_KEY: {
        KEBAB_CASE_KEY: {
          PASCAL_CASE_KEY: {
            SNAKE_CASE_KEY: {
              UPPER_KEBAB_CASE_KEY: {
                UPPER_SNAKE_CASE_KEY: 0,
              },
            },
          },
        },
      },
    });
  });
});
