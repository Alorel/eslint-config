module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'array-type': ['error', 'array-simple'],
    '@typescript-eslint/ban-ts-comment': 'off',
    'ban-tslint-comment': 'error'
  }
};
