#!/usr/bin/env node
'use strict';

const fs = require('fs');

const genExports = require('./common/genExports');
const { SRC_PATH } = require('./common/constants');

fs.writeFileSync(SRC_PATH + '/index.tsx', Buffer.from(genExports()), (err) => {
  if (err) {
    console.error(`❌ 发生错误：${err}`);
  } else {
    console.log(`✅ `, SRC_PATH + '/index.tsx');
  }
});
