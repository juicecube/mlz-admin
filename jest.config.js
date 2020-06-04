const path = require('path');

module.exports = {
  verbose: true,
  rootDir: path.join(__dirname, ''),
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@@/(.*)$': '<rootDir>/src/.umi/$1',
  },
};
