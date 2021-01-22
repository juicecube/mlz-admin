#!/usr/bin/env node

module.exports = (opt = {}) => `export const BuildTime = '${new Date().getTime()}';\n\r`;
