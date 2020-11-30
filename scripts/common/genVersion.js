#!/usr/bin/env node
const path = require('path');

const pkg = require('../../package.json');

module.exports = () => `export const version = '${pkg.version}'`;
