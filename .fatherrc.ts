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
  lessInBabelMode: true,
  runtimeHelpers: true,
  extraRollupPlugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: 'tsconfig.dist.json',
    }),
  ],
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
  target: 'browser',
  inject: {
    'window.__DEV__': 'false',
  },
};
