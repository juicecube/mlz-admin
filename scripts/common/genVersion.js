#!/usr/bin/env node
const { version } = require('../../lerna.json');
const antdVersion = require('../../node_modules/antd/package.json').version;

module.exports = (opt = {}) => `export const version = '${version}';\n\r
export const AntdVersion = '${opt.antdVersion || antdVersion}';`;
