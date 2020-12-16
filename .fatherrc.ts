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
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', style: true }],
    [
      'search-and-replace',
      {
        rules: [
          {
            search: '%THIS_WILL_BE_EMPTY_AFTER_DIST%',
            replace: process.env.NODE_ENV,
          },
          {
            search: '%MOCK_PROXY_HOST%',
            replace: process.env.NODE_ENV,
          },
        ],
      },
    ],
  ],
  target: 'browser',
};
