const path = require('path');

const ROOT_PATH = process.cwd();
const PACKAGE_PATH = path.join(ROOT_PATH, './packages');
module.exports = {
  ROOT_PATH,
  PACKAGE_PATH,
  SRC_PATH: path.join(PACKAGE_PATH, './mlz-admin/src'),
  ADMINER_SRC_PATH: path.join(PACKAGE_PATH, './mlz-adminer/src'),
};
