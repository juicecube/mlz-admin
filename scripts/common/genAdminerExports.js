#!/usr/bin/env node

const { genExports } = require('./genExports');
const { ADMINER_SRC_PATH } = require('./constants');

const genAdminerExports = () =>
  genExports(ADMINER_SRC_PATH, {
    donotCamelizes: [],
    donotCompiles: ['service'],
    extraContents: [`export { AuthMenu } from './use-auth-guard';`, ` export { AuthResource } from './use-auth-guard';`],
  });

module.exports = genAdminerExports;
