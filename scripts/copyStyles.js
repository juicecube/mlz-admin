#!/usr/bin/env node
/* eslint-disable no-loop-func */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { copyDir } = require('./common/copyFile');

const { ANTD_PATH, SRC_PATH } = require('./common/constants');
const antdDepsStat = fs.statSync(ANTD_PATH);
const ignores = ['styles', 'create-icon-font-script', 'dark-theme-toggler', 'detail-card', 'error-boundary', 'index.tsx'];

if (antdDepsStat.isDirectory()) {
  const files = fs.readdirSync(SRC_PATH);
  for (let i = 0; i < files.length; i++) {
    const folderName = files[i];
    const componentDistEsmDirPath = path.join(SRC_PATH, '..', `./es/${folderName}`);
    const componentDistLibDirPath = path.join(SRC_PATH, '..', `./lib/${folderName}`);
    if (folderName in ignores) {
      console.error(`${folderName} had been ignored`);
      continue;
    }
    const componentBuiltStyleDir = path.join(ANTD_PATH, `./lib/${folderName}/style`);
    // copy对应的css文件
    if (fs.readdirSync(componentBuiltStyleDir).isDirectory()) {
      // 对应组件的style是一个文件夹
      [componentDistEsmDirPath, componentDistLibDirPath].forEach((artifactPath) => {
        const targetArtifactDir = `${artifactPath}/style`;
        if (fs.statSync(artifactPath).isDirectory()) {
          copyDir(componentBuiltStyleDir, targetArtifactDir);
          console.log(`✔ ${folderName} copied from ${componentBuiltStyleDir} to ${targetArtifactDir}`);
        } else {
          console.error(`${folderName} hasn't found compiled css styles`);
        }
      });
    } else {
      console.error(`${componentBuiltStyleDir} does not exists`);
    }
  }
}
