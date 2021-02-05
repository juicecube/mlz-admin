#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { ROOT_PATH } = require('./constants');

const genAdminerConfig = () => {
  const configDir = path.join(ROOT_PATH, './config');
  const configPath = path.join(configDir, './dev.json');
  try {
    fs.accessSync(configPath);
    const configContent = fs.readFileSync(configPath).toString();
    return `
    // 请在<projectRoot>指定dev.json配置
    export const config = ${configContent}
    `;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(configPath + '并不存在');
    return `export const config = {'development': {'hosts': 'https://www.google.com'}}`;
  }
};

module.exports = genAdminerConfig;
