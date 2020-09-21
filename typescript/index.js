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
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/explicit-module-boundary-types': ['error', {allowArgumentsExplicitlyTypedAsAny: true}]
  },
  overrides: [{
    files: ['*.js', '*.jsx'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  }]
};
