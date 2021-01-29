/* eslint-disable no-console */
const fs = require('fs');
const { ROOT_PATH } = require('./constants');

const createFile = (relativePath, stringOrBuffer) =>
  fs.writeFileSync(ROOT_PATH + relativePath, stringOrBuffer, (err) => {
    err ? console.error(`❌ 发生错误：${err}`) : console.log(`✅ `, ROOT_PATH + relativePath);
  });
module.exports = createFile;
