module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/recommended', 'plugin:react/recommended', 'plugin:import/typescript'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  globals: {
    $MOCK_PROXY_HOST$: 'readonly',
  },
  settings: {
    react: {
      version: '16.9',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'markdown'],
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/jsx-filename-extension': 0,
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': 0,
        'react/state-in-constructor': 0,
        'react/no-access-state-in-setstate': 0,
        'react/destructuring-assignment': 0,
        'react/sort-comp': 0,
        'spaced-comment': 0,
        'react/require-default-props': 0,
      },
    },
    {
      files: ['*.ts'],
      rules: {
        'no-restricted-syntax': 1,
      },
    },
  ],
  rules: {
    'no-else-return': 0,
    'import/prefer-default-export': 0,
    'no-nested-ternary': 1,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-control-regex': 1,
    'prefer-object-spread': 0,
    'prefer-template': 0,
    'import/no-named-default': 1,
    'no-unused-expressions': 0,
    'no-underscore-dangle': 0,
    'import/order': 0,
    'import/first': 1,
    'import/no-cycle': 0,
    'import/newline-after-import': 0,
    'import/no-useless-path-segments': 0,
    'no-use-before-define': 0,
    'react/display-name': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    'no-console': 2,
    'jsx-a11y/anchor-is-valid': 1,
    'react/jsx-props-no-spreading': 0,
    'consistent-return': 1,
    'no-throw-literal': 1,
    'no-restricted-globals': 1,
    'no-return-assign': 0,
    'no-plusplus': 0,
    'max-classes-per-file': 0,
  },
};
