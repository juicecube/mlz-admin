module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      version: '16.12',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'markdown', 'react', 'react-hooks', 'prettier'],
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/destructuring-assignment': 0,
        'react/jsx-filename-extension': 0,
        'react/destructuring-assignment': 1,
        'react/prop-types': 0,
      },
    },
    {
      files: ['*.ts'],
      rules: {
        // 将mlz-admin/src/shared/utils/index.ts 13:5方法移出后可以重新开启验证
        'no-restricted-syntax': 1,
      },
    },
  ],
  rules: {
    'no-else-return': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
    'no-nested-ternary': 1,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'no-control-regex': 1,
    'prefer-object-spread': 0,
    'import/no-named-default': 1,
    'no-unused-expressions': 1,
    'no-underscore-dangle': 0,
    'import/order': 0,
    'no-use-before-define': 1,
    'react/display-name': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    'no-console': 0,
  },
};
