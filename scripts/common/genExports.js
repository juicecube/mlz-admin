#!/usr/bin/env node
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
const extraContents = [
  `
  export { default as createIconFontScript } from './create-icon-font-script';\r\n
  export { default as useDarkTheme } from './dark-theme-toggler/index.hooks';\r\n
`,
];

const genExports = ($srcPath = SRC_PATH, $opt = { donotCamelizes, donotCompiles, extraContents }) => {
  const { donotCamelizes: unCamelizes, donotCompiles: unCompiles, extraContents: extras } = $opt;
  if (Object.values($opt).every((param) => typeof param === 'object' && param.length >= 0)) {
    const gutter = '\r\n\r\n';
    let exportsContents = ``;
    // eslint-disable-next-line no-restricted-syntax
    for (const folder of fs.readdirSync($srcPath)) {
      if (!/\.umi/.test(folder) && !unCompiles.includes(folder)) {
        const filePathname = path.join($srcPath, folder);
        const folderStat = fs.statSync(filePathname);
        if (folderStat.isDirectory()) {
          exportsContents += `export { default as ${unCamelizes.includes(folder) ? folder : camelizeFolderName(folder)} } from '.${filePathname.split($srcPath)[1]}';\n\r`;
        }
      }
    }
    exportsContents += extras.reduce((prev, curr) => {
      return (prev += `${gutter}${curr}`);
    }, '');
    return `/**  you SHOULD NOT delete this file ,  keep it       *\r\n*    stay in your .gitignore cause it was generated      *\r\n*    with necessities automatically❗️      *\r\n**/${gutter}${exportsContents}`;
  } else {
    throw new Error(`$opt的每个参数都必须是数组`);
  }
};

module.exports = genExports;
