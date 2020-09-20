module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    'array-type': ['error', 'array-simple'],
    '@typescript-eslint/ban-ts-comment': 'off',
    'ban-tslint-comment': 'error'
  }
};
