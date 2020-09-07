#!/usr/bin/env node
/* eslint-disable */
const fs = require('fs');
const path = require('path');
const { capitalize } = require('lodash');

const { SRC_PATH } = require('./constants');

const camelizeFolderName = (foldername) => {
  return foldername
    .split('-')
    .map((item) => {
      return capitalize(item);
    })
    .join('');
};

// 不驼峰命名的
const donotCamelizes = ['message', 'notification'];

// 不打包的文件夹
const donotCompiles = ['shared'];

const genExports = () => {
  let exportsContents = ``;
  for (const folder of fs.readdirSync(SRC_PATH)) {
    if (!/\.umi$/.test(folder) && !donotCompiles.includes(folder)) {
      const filePathname = path.join(SRC_PATH, folder);
      const folderStat = fs.statSync(filePathname);
      if (folderStat.isDirectory()) {
        exportsContents += `export { default as ${donotCamelizes.includes(folder) ? folder : camelizeFolderName(folder)} } from '.${filePathname.split(SRC_PATH)[1]}';\n\r`;
      }
    }
  }
  return `/** you SHOULD NOT delete this file or    *
           * remove it from your .GITIGNORE evenif  *
           * it is generated automatically          *
          **/\r\n\r\n${exportsContents}`;
};

module.exports = genExports;
