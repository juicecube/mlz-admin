import typescript from 'rollup-plugin-typescript2';

export default {
  entry: ['src/index.tsx', 'src/service/constant/config.ts'],
  overridesByEntry: {
    'src/index.tsx': {
      file: `/es/index`,
    },
    'src/service/constant/config.ts': {
      file: `/es/service/constant/config.ts`,
    },
  },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: 'babel',
  runtimeHelpers: true,
  extraRollupPlugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: 'tsconfig.dist.json',
    }),
  ],
  extraBabelPlugins: [
    ['import', { libraryName: '@mlz/admin', style: false }],
    [
      'search-and-replace',
      {
        rules: [
          {
            search: '$THIS_WILL_BE_EMPTY_AFTER_DIST$',
            replace: process.env.NODE_ENV,
          },
        ],
      },
    ],
  ],
  target: 'browser',
};
