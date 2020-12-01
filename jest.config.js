const path = require('path');

const ignoredPaths = ['/node_modules/', '/src/shared/utils/', '/src/shared/test-utils/'];
module.exports = {
  verbose: false,
  rootDir: path.join(__dirname, ''),
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testTimeout: 8000,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ignoredPaths,
  testPathIgnorePatterns: ignoredPaths,
};
