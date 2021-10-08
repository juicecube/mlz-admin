#!/usr/bin/env node
/* eslint-disable no-loop-func */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { copyDir } = require('./common/copyFile');

const { ANTD_PATH, SRC_PATH } = require('./common/constants');
const antdDepsStat = fs.statSync(ANTD_PATH);
const ignores = ['styles', 'create-icon-font-script', 'dark-theme-toggler', 'detail-card', 'error-boundary', 'index.tsx', 'select-range', 'watermark', 'shared'];

const copyDestedStyleFolder = (targetDir) => {
  const antdStyleDestDir = path.join(ANTD_PATH, '.', `./lib/style`);
  copyDir(antdStyleDestDir, targetDir, { overwrite: false });
};

if (antdDepsStat.isDirectory()) {
  const files = fs.readdirSync(SRC_PATH);
  for (let i = 0; i < files.length; i++) {
    const folderName = files[i];
    const componentDistEsmDirPath = path.join(SRC_PATH, '..', `./es/${folderName}`);
    const componentDistLibDirPath = path.join(SRC_PATH, '..', `./lib/${folderName}`);
    console.log(folderName, ignores.includes(folderName), 1122);

    // 忽略
    if (ignores.includes(folderName)) {
      console.error(`🥷 ${folderName} had been ignored`);
      continue;
    }

    // 拷贝style产物文件夹
    if (folderName === 'style') {
      [componentDistEsmDirPath, componentDistLibDirPath].forEach((styleArtifactDir) => {
        copyDestedStyleFolder(styleArtifactDir);
      });
      continue;
    }

    // 操作其余产物
    const componentBuiltStyleDir = path.join(ANTD_PATH, `./lib/${folderName}/style`);
    // copy对应的css文件
    if (fs.statSync(componentBuiltStyleDir).isDirectory()) {
      // 对应组件的style是一个文件夹
      [componentDistEsmDirPath, componentDistLibDirPath].forEach((artifactPath) => {
        const targetArtifactDir = `${artifactPath}/style`;
        if (fs.statSync(artifactPath).isDirectory()) {
          copyDir(componentBuiltStyleDir, targetArtifactDir);
        } else {
          console.error(`❌ ${folderName} hasn't found compiled css styles`);
        }
      });
    } else {
      console.error(`❌ ${componentBuiltStyleDir} does not exists`);
    }
  }
} else {
  console.error(`❌ we didn't found 'antd' in ${ANTD_PATH}`);
}
