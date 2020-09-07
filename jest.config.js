const path = require('path');

module.exports = {
  verbose: false,
  rootDir: path.join(__dirname, ''),
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['/node_modules/'],
};
