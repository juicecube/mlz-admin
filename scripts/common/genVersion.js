#!/usr/bin/env node
const pkg = require('../../package.json');
const antdVersion = require('../../node_modules/antd/package.json').version;

module.exports = (opt = {}) => `export const version = '${pkg.version}';\n\r
export const AntdVersion = '${opt.antdVersion || antdVersion || '4.6.2'}';`;
