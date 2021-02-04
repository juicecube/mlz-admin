const path = require('path');

const extraIgnoredPaths = ['/src/shared/utils/', '/src/shared/test-utils/', '/src/date-picker/__tests__/utils.test.ts', '/src/shared/service/', '/src/error-boundary/', '/src/watermark/canvas.ts'];

module.exports = {
  verbose: false,
  rootDir: path.join(__dirname, ''),
  setupFiles: ['<rootDir>/tests/setup.js', 'jest-canvas-mock'],
  testTimeout: 5000,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['/node_modules/', ...extraIgnoredPaths],
  testPathIgnorePatterns: ['/node_modules/', ...extraIgnoredPaths],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
