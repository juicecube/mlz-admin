const path = require('path');

module.exports = {
  verbose: false,
  rootDir: path.join(__dirname, ''),
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/src/shared/utils/'],
  testPathIgnorePatterns: ['/node_modules/', '/src/shared/utils/'],
};
