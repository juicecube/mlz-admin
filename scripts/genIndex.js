#!/usr/bin/env node
const fs = require('fs');

const genExports = require('./common/genExports');
const genVersion = require('./common/genVersion');
const { SRC_PATH } = require('./common/constants');

fs.writeFileSync(SRC_PATH + '/index.tsx', Buffer.from(`${genVersion()};\r\n\r\n${genExports()}`), (err) => {
  if (err) {
    console.error(`❌ 发生错误：${err}`);
  } else {
    console.log(`✅ `, SRC_PATH + '/index.tsx');
  }
});
