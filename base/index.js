module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      experimentalDecorators: true,
      jsx: true
    }
  },
  env: {
    node: true,
    browser: true,
    mocha: true,
    worker: true
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-loss-of-precision': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable-loop': 'error',
    'require-atomic-updates': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'warn',
    complexity: ['error', 12],
    'consistent-return': 'error',
    curly: ['error', 'all'],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    'grouped-accessor-pairs': 'error',
    'max-classes-per-file': ['error', 1],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignore: [
          1,
          0,
          3600,
          3600000,
          1000,
          1024,
          86400000,
          86400000000,
          30,
          60,
          24,
          365,
          365.24,
          31,
          28
        ],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        enforceConst: true
      }
    ],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'prefer-promise-reject-errors': 'error',
    'require-await': 'error',
    yoda: 'error',
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false
      }
    ],
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 5
      }
    ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 5
      }
    ],
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    camelcase: [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: true,
        ignoreImports: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'function-call-argument-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'linebreak-style': 'error',
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        allowClassStart: false,
        allowBlockStart: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false
      }
    ],
    'lines-between-class-members': 'error',
    'max-depth': 'error',
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-nested-callbacks': ['error', 5],
    'max-statements-per-line': [
      'error',
      {
        max: 1
      }
    ],
    'multiline-comment-style': 'error',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2
      }
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-spacing': ['error', 'never'],
    'prefer-object-spread': 'error',
    'quote-props': [
      'error',
      'as-needed',
      {
        numbers: false
      }
    ],
    quotes: ['error', 'single'],
    semi: 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false
      }
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    'template-tag-spacing': ['error', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error'
  }
};
