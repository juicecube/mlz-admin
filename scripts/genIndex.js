#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');

const { genExports } = require('./common/genExports');
const genVersion = require('./common/genVersion');
const genBuildTime = require('./common/genBuildTime');
const genSupporttingEnv = require('./common/genSupporttingEnv');
const genAdminerExports = require('./common/genAdminerExports');
const genAdminerConfig = require('./common/genAdminerConfig');
const joinGeneratorsIntoBuffer = require('./common/joinGeneratorsIntoBuffer');
const { SRC_PATH, ADMINER_SRC_PATH, SERVICE_PATH } = require('./common/constants');

[
  // 生成admin组件列表
  {
    path: SRC_PATH + '/index.tsx',
    bufferGenerators: [genVersion, genBuildTime, genSupporttingEnv],
    extra: genExports(),
  },
  // 生成adminer hooks列表
  {
    path: ADMINER_SRC_PATH + '/index.tsx',
    bufferGenerators: [genAdminerExports],
    extra: [],
  },
  // 生成adminer的config列表
  {
    path: SERVICE_PATH + '/constant/config.ts',
    bufferGenerators: [genAdminerConfig],
    extra: [],
  },
].forEach(($section) => {
  const { path, bufferGenerators, extra } = $section;
  fs.writeFileSync(path, Buffer.from(`${joinGeneratorsIntoBuffer(...bufferGenerators)}${extra || ''}`), (err) => {
    if (err) {
      console.error(`❌ 发生错误：${err}`);
    } else {
      console.log(`✅ `, path);
    }
  });
});
