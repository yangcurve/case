import { describe, expect, test } from 'bun:test';
import { to } from './';

const flatObj = {
  '': 0, // should be ignored
  'white space': 0, // should be ignored
  camelCaseKey: 0,
  'kebab-case-key': 0,
  PascalCaseKey: 0,
  snake_case_key: 0,
  'UPPER-KEBAB-CASE-KEY': 0,
  UPPER_SNAKE_CASE_KEY: 0,
};

const nestedObj = {
  '': {
    // should be ignored
    'white space': {
      // should be ignored
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
    },
  },
};

describe('to X case keys', () => {
  test('to camel case keys', () => {
    expect(to('camel').caseKeys(flatObj)).toEqual({
      '': 0,
      'white space': 0,
      camelCaseKey: 0,
      kebabCaseKey: 0,
      pascalCaseKey: 0,
      snakeCaseKey: 0,
      upperKebabCaseKey: 0,
      upperSnakeCaseKey: 0,
    });
  });

  test('to kebab case keys', () => {
    expect(to('kebab').caseKeys(flatObj)).toEqual({
      '': 0,
      'white space': 0,
      'camel-case-key': 0,
      'kebab-case-key': 0,
      'pascal-case-key': 0,
      'snake-case-key': 0,
      'upper-kebab-case-key': 0,
      'upper-snake-case-key': 0,
    });
  });

  test('to pascal case keys', () => {
    expect(to('pascal').caseKeys(flatObj)).toEqual({
      '': 0,
      'white space': 0,
      CamelCaseKey: 0,
      KebabCaseKey: 0,
      PascalCaseKey: 0,
      SnakeCaseKey: 0,
      UpperKebabCaseKey: 0,
      UpperSnakeCaseKey: 0,
    });
  });

  test('to snake case keys', () => {
    expect(to('snake').caseKeys(flatObj)).toEqual({
      '': 0,
      'white space': 0,
      camel_case_key: 0,
      kebab_case_key: 0,
      pascal_case_key: 0,
      snake_case_key: 0,
      upper_kebab_case_key: 0,
      upper_snake_case_key: 0,
    });
  });

  test('to upper kebab case keys', () => {
    expect(to('upperKebab').caseKeys(flatObj)).toEqual({
      '': 0,
      'white space': 0,
      'CAMEL-CASE-KEY': 0,
      'KEBAB-CASE-KEY': 0,
      'PASCAL-CASE-KEY': 0,
      'SNAKE-CASE-KEY': 0,
      'UPPER-KEBAB-CASE-KEY': 0,
      'UPPER-SNAKE-CASE-KEY': 0,
    });
  });

  test('to upper snake case keys', () => {
    expect(to('upperSnake').caseKeys(flatObj)).toEqual({
      '': 0,
      'white space': 0,
      CAMEL_CASE_KEY: 0,
      KEBAB_CASE_KEY: 0,
      PASCAL_CASE_KEY: 0,
      SNAKE_CASE_KEY: 0,
      UPPER_KEBAB_CASE_KEY: 0,
      UPPER_SNAKE_CASE_KEY: 0,
    });
  });
});

describe('to X case keys deep', () => {
  test('to camel case keys deep', () => {
    expect(to('camel').caseKeysDeep(nestedObj)).toEqual({
      '': {
        'white space': {
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
        },
      },
    });
  });

  test('to kebab case keys deep', () => {
    expect(to('kebab').caseKeysDeep(nestedObj)).toEqual({
      '': {
        'white space': {
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
        },
      },
    });
  });

  test('to pascal case keys deep', () => {
    expect(to('pascal').caseKeysDeep(nestedObj)).toEqual({
      '': {
        'white space': {
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
        },
      },
    });
  });

  test('to snake case keys deep', () => {
    expect(to('snake').caseKeysDeep(nestedObj)).toEqual({
      '': {
        'white space': {
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
        },
      },
    });
  });

  test('to upper kebab case keys deep', () => {
    expect(to('upperKebab').caseKeysDeep(nestedObj)).toEqual({
      '': {
        'white space': {
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
        },
      },
    });
  });

  test('to upper snake case keys deep', () => {
    expect(to('upperSnake').caseKeysDeep(nestedObj)).toEqual({
      '': {
        'white space': {
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
        },
      },
    });
  });
});
