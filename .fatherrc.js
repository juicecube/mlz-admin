const modules = require('./modules.js');

const components = Object.values(modules);
const overrides = {}
components.forEach((comp) => {
  const { entry, file } = comp;
  return overrides[entry] = { file: file }
})

export default {
  entry: ['src/index.tsx', ...components.map(($module) => $module['entry'])],
  overridesByEntry: {
    'src/index.tsx': {
      file: `/es/index`,
    },
    ...overrides
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