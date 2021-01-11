const path = require('path');

const ignoredPaths = ['/node_modules/', '/src/shared/utils/', '/src/shared/test-utils/', '/src/date-picker/__tests__/utils.test.ts', '/src/shared/service/', '/src/error-boundary/'];
module.exports = {
  verbose: true,
  rootDir: path.join(__dirname, ''),
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testTimeout: 8000,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ignoredPaths,
  testPathIgnorePatterns: ignoredPaths,
};
