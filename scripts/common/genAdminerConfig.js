#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { ROOT_PATH } = require('./constants');

const genAdminerConfig = () => {
  const configDir = path.join(ROOT_PATH, './config');
  const configContent = fs.readFileSync(path.join(configDir, './dev.json')).toString();
  return `export const config = ${configContent}`;
};

module.exports = genAdminerConfig;
