#!/usr/bin/env node

const genExports = require('./genExports');
const { ADMINER_SRC_PATH } = require('./constants');

const genAdminerExports = () =>
  genExports(ADMINER_SRC_PATH, {
    donotCamelizes: [],
    donotCompiles: [],
    extraContents: [],
  });

module.exports = genAdminerExports;
