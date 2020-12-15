#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');

const genExports = require('./common/genExports');
const genVersion = require('./common/genVersion');
const genSupporttingEnv = require('./common/genSupporttingEnv');
const joinGeneratorsIntoBuffer = require('./common/joinGeneratorsIntoBuffer');
const { SRC_PATH } = require('./common/constants');

fs.writeFileSync(SRC_PATH + '/index.tsx', Buffer.from(`${joinGeneratorsIntoBuffer(genVersion, genSupporttingEnv)}${genExports()}`), (err) => {
  if (err) {
    console.error(`❌ 发生错误：${err}`);
  } else {
    console.log(`✅ `, SRC_PATH + '/index.tsx');
  }
});
