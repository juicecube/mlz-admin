const path = require('path');
const pkg = require('./package.json');

export default {
  entry: ['src/Button/Button.tsx', 'src/Affix/Affix.tsx', 'src/index.tsx'],
  overridesByEntry: {
    'src/index.tsx': {
      file: `/es/index`,
    },
    'src/Button/Button.tsx': {
      file: `/es/Button`,
    },
    'src/Affix/Affix.tsx': {
      file: `/es/Affix`,
    },
  },
  esm: 'rollup',
  cjs: {
    type: 'rollup',
    file: "lib/index"
  },
  extractCSS: false,
  target: 'browser',
  inject: {
    'window.__DEV__': false,
  },
}