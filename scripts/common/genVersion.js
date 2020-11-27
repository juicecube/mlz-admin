#!/usr/bin/env node
/* eslint-disable import/no-dynamic-require */
const path = require('path');

const pkg = require(path.resolve(process.cwd(), 'package.json'));

module.exports = () => `export const version = '${pkg.version}'`;
