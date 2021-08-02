#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');

function copy(sourceFilePath, targetPathFileName) {
  try {
    fs.createReadStream(sourceFilePath, { bufferSize: 64 * 1024 }).pipe(fs.createWriteStream(targetPathFileName));
  } catch (err) {
    console.error(`❌ ${err}`);
  }
}

module.exports = copy;
