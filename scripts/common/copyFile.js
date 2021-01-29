#!/usr/bin/env node
const fs = require('fs');

function copy(fromPath, toPath) {
  try {
    fs.createReadStream(fromPath, { bufferSize: 64 * 1024 }).pipe(fs.createWriteStream(toPath));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`❌ ${err}`);
  }
}

module.exports = copy;
