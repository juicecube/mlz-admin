import typescript from 'rollup-plugin-typescript2';

const path = require('path');

export default {
  entry: ['src/index.tsx'],
  overridesByEntry: {
    'src/index.tsx': {
      file: `/es/index`,
    },
  },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  extractCSS: false,
  runtimeHelpers: true,
  extraRollupPlugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: 'tsconfig.json',
    }),
  ],
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
  cjs: 'babel',
  target: 'browser',
  inject: {
    'window.__DEV__': 'false',
  },
};
