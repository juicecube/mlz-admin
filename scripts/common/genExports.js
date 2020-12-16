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
const donotCompiles = ['shared', 'style'];

// 额外打包的内容
const extraContents = [`export { default as createIconFontScript } from './create-icon-font-script'`];

const genExports = () => {
  const gutter = '\r\n\r\n';
  let exportsContents = ``;
  for (const folder of fs.readdirSync(SRC_PATH)) {
    if (!/\.umi/.test(folder) && !donotCompiles.includes(folder)) {
      const filePathname = path.join(SRC_PATH, folder);
      const folderStat = fs.statSync(filePathname);
      if (folderStat.isDirectory()) {
        exportsContents += `export { default as ${donotCamelizes.includes(folder) ? folder : camelizeFolderName(folder)} } from '.${filePathname.split(SRC_PATH)[1]}';\n\r`;
      }
    }
  }
  exportsContents += extraContents.reduce((prev, curr) => {
    return (prev += `${gutter}${curr}`);
  });
  return `/**  you should NOT DELETE this file and keep it       *\r\n*    stay in your .gitignore cause it was generated      *\r\n*    with necessities automatically❗️     *\r\n**/${gutter}${exportsContents}`;
};

module.exports = genExports;
