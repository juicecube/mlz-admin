import typescript from 'rollup-plugin-typescript2';

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
  extractCSS: false,
  // lessInBabelMode: true,
  runtimeHelpers: true,
  extraRollupPlugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: 'tsconfig.dist.json',
    }),
  ],
  extraBabelPlugins: [['import', { libraryName: 'antd', style: false }]],
  target: 'browser',
  inject: {
    'window.__DEV__': 'false',
  },
  replace: {
    VERSION: JSON.stringify(require('./package').version),
    __DEV__: process.env.NODE_ENV,
  },
};
