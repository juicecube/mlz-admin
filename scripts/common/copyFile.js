#!/usr/bin/env node
const fs = require('fs');

function copy(fromPath, toPath) {
  try {
    fs.createReadStream(fromPath, { bufferSize: 64 * 1024 }).pipe(fs.createWriteStream(toPath));
  } catch (err) {
    console.error(`❌ ${err}`);
  }
}

module.exports = copy;
