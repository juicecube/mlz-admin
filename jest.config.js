const path = require('path');

const ignoredPaths = ['/node_modules/', '/src/shared/utils/', '/src/date-picker/__tests__/utils.test.ts', '/src/shared/test-utils/', '/src/shared/service/'];
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
