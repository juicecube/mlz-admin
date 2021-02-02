#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');

const genExports = require('./common/genExports');
const genAdminerExports = require('./common/genAdminerExports');
const genVersion = require('./common/genVersion');
const genBuildTime = require('./common/genBuildTime');
const genSupporttingEnv = require('./common/genSupporttingEnv');
const joinGeneratorsIntoBuffer = require('./common/joinGeneratorsIntoBuffer');
const { SRC_PATH, ADMINER_SRC_PATH } = require('./common/constants');

// 为mlz-admin生成index
fs.writeFileSync(SRC_PATH + '/index.tsx', Buffer.from(`${joinGeneratorsIntoBuffer(genVersion, genBuildTime, genSupporttingEnv)}${genExports()}`), (err) => {
  if (err) {
    console.error(`❌ 发生错误：${err}`);
  } else {
    console.log(`✅ `, SRC_PATH + '/index.tsx');
  }
});

// 为mlz-adminer生成index
fs.writeFileSync(ADMINER_SRC_PATH + '/index.tsx', Buffer.from(genAdminerExports()), (err) => {
  if (err) {
    console.error(`❌ 发生错误：${err}`);
  } else {
    console.log(`✅ `, SRC_PATH + '/index.tsx');
  }
});
