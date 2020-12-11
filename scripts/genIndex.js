#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');

const genExports = require('./common/genExports');
const genVersion = require('./common/genVersion');
const { SRC_PATH } = require('./common/constants');

global.PROXY_URL = 'https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect';
fs.writeFileSync(SRC_PATH + '/index.tsx', Buffer.from(`${genVersion()};\r\n\r\n${genExports()}`), (err) => {
  if (err) {
    console.error(`❌ 发生错误：${err}`);
  } else {
    console.log(`✅ `, SRC_PATH + '/index.tsx');
  }
});
