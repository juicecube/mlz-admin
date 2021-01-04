#!/usr/bin/env node
/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
const { ROOT_PATH } = require('./common/constants');

const antdDarkCssFilePath = 'node_modules/antd/dist/antd.dark.css';
const outputRelativeDir = '/docs/public';
const cssFileName = 'antd.dark.css';
const filePath = ROOT_PATH + `${outputRelativeDir}/${cssFileName}`;
fs.readFile(antdDarkCssFilePath, (err, data) => {
  if (err) {
    console.error(data);
  } else {
    try {
      const antdDarkCssCode = data;
      fs.writeFileSync(filePath, Buffer.from(antdDarkCssCode), (error) => {
        if (error) {
          console.error(`❌ 发生错误：${err}`);
        } else {
          console.log(`✅ 深夜模式构造成功，路径在`, filePath);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
});
