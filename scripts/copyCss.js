#!/usr/bin/env node
/* eslint-disable no-console */
// 搬每个组建的style/index.css过来，以支持ssr

const fs = require('fs');
const path = require('path');
const copy = require('./common/copyFile');

const { ANTD_PATH, SRC_PATH } = require('./common/constants');
const antdDepsStat = fs.statSync(ANTD_PATH);
const ignores = ['styles'];

if (antdDepsStat.isDirectory()) {
  const files = fs.readdirSync(SRC_PATH);
  for (let i = 0; i < files.length; i++) {
    const folderName = files[i];
    if (ignores.includes(folderName)) {
      continue;
    }
    const componentBuiltCssFilePath = path.join(ANTD_PATH, `./${folderName}/lib/style/index.css`);
    const componentDistEsmPath = path.join(SRC_PATH, '..', `es/${folderName}/style/index.css`);
    const componentDistLibPath = path.join(SRC_PATH, '..', `lib/${folderName}/style/index.css`);
    // copy对应的css文件
    [componentDistEsmPath, componentDistLibPath].forEach((artifactPath) => {
      copy(componentBuiltCssFilePath, artifactPath);
    });
  }
}
