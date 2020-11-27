#!/usr/bin/env node
const fs = require('fs');

const genExports = require('./common/genExports.ts');
const genVersion = require('./common/genVersion.ts');
const { SRC_PATH } = require('./common/constants.ts');

fs.writeFileSync(SRC_PATH + '/index.tsx', Buffer.from(`${genVersion()};\r\n\r\n${genExports()}`), (err) => {
  if (err) {
    console.error(`❌ 发生错误：${err}`);
  } else {
    console.log(`✅ `, SRC_PATH + '/index.tsx');
  }
});
