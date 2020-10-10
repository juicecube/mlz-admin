const path = require('path');

const ROOT_PATH = process.cwd();
module.exports = {
  ROOT_PATH,
  SRC_PATH: path.join(ROOT_PATH, './src'),
};
