#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');

// 拷贝单个文件
function copy(sourceFilePath, targetPathFileName) {
  try {
    fs.createReadStream(sourceFilePath, { bufferSize: 64 * 1024 }).pipe(fs.createWriteStream(targetPathFileName));
  } catch (err) {
    console.error(`❌ ${err}`);
  }
}

// 拷贝文件夹
function copyDir() {
  //
}

module.exports = { copy, copyDir };
