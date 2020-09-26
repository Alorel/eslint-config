const noMagicNumbersConfig = require('@alorel/eslint-config-shared/no-magic-numbers');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple'
      }
    ],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/explicit-module-boundary-types': ['error', {allowArgumentsExplicitlyTypedAsAny: true}],
    '@typescript-eslint/no-magic-numbers': ['error', {
      ...noMagicNumbersConfig,
      ignoreEnums: true,
      ignoreNumericLiteralTypes: true
    }],
    '@typescript-eslint/no-shadow': 'error',
    'no-magic-numbers': 'off',
    'no-shadow': 'off'
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    },
    {
      files: [
        'build/**/*.js',
        'rollup.config*.js'
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-useless-constructor': 'off',
        'no-loop-func': 'off'
      }
    }
  ]
};
