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
  cjs: 'babel',
  // umd: {
  //   // minFile: true,
  //   // file: 'dist/mlz-admin.min.js',
  //   sourcemap: true,
  // },
  extractCSS: false,
  runtimeHelpers: true,
  extraRollupPlugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: 'tsconfig.json',
    }),
  ],
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
  target: 'browser',
  inject: {
    'window.__DEV__': 'false',
  },
};
