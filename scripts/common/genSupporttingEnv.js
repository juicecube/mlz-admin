#!/usr/bin/env node

module.exports = () => `export const EScences = {
  production: '',
  development: 'dev',
  test: 'test',
  staging: 'staging',
  mock: 'mock'
};
export type SupportedEnvTypes = keyof typeof EScences;`;
