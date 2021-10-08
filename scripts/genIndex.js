#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');

const { genExports } = require('./common/genExports');
const genVersion = require('./common/genVersion');
const genBuildTime = require('./common/genBuildTime');
const genSupporttingEnv = require('./common/genSupporttingEnv');
const genAdminerExports = require('./common/genAdminerExports');
const genAdminerConfig = require('./common/genAdminerConfig');
const joinMakersIntoBuffer = require('./common/joinMakersIntoBuffer');
const { SRC_PATH, ADMINER_SRC_PATH, SERVICE_PATH } = require('./common/constants');

[
  // 生成admin组件列表
  {
    path: SRC_PATH + '/index.tsx',
    bufferMakers: [genVersion, genBuildTime, genSupporttingEnv],
    extra: genExports(),
  },
  // 生成adminer hooks列表
  {
    path: ADMINER_SRC_PATH + '/index.tsx',
    bufferMakers: [genAdminerExports],
    extra: [],
  },
  // 生成adminer的config列表
  {
    path: SERVICE_PATH + '/constant/config.ts',
    bufferMakers: [genAdminerConfig],
    extra: [],
  },
].forEach(($section) => {
  const { path, bufferMakers, extra } = $section;
  fs.writeFileSync(path, Buffer.from(`${joinMakersIntoBuffer(...bufferMakers)}${extra || ''}`), (err) => {
    if (err) {
      console.error(`❌ 发生错误：${err}`);
    } else {
      console.log(`✅ `, path);
    }
  });
});
