#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs-extra');

// 拷贝单个文件
function copyFile(sourceFilePath, targetPathFileName) {
  try {
    fs.createReadStream(sourceFilePath, { bufferSize: 64 * 1024 }).pipe(fs.createWriteStream(targetPathFileName));
  } catch (err) {
    console.error(`❌ ${err}`);
  }
}

// 拷贝文件夹
function copyDir(sourceDir, targetDir, opt = { overwrite: true }) {
  //
  if (!fs.pathExistsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }
  if (fs.pathExistsSync(targetDir) && fs.statSync(sourceDir).isDirectory()) {
    fs.copy(sourceDir, targetDir, opt, (err) => {
      if (err) {
        console.error(`❌ ${sourceDir} hasn't found copied to ${targetDir}`);
      } else {
        console.log(`✅ copied ${sourceDir} to ${targetDir}`);
      }
    });
  } else {
    console.error(`❌ ${sourceDir} or ${targetDir} shouled be a directory`);
  }
}

module.exports = { copyFile, copyDir };
