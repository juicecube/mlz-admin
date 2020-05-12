module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'markdown', 'prettier'],
  rules: {
    'no-else-return': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
    'no-nested-ternary': 1,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-control-regex': 1,
    'prefer-object-spread': 0,
  },
};
