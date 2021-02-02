const path = require('path');

const ROOT_PATH = process.cwd();
module.exports = {
  ROOT_PATH,
  SRC_PATH: path.join(ROOT_PATH, './packages/mlz-admin/src'),
  HOOKS_SRC_PATH: path.join(ROOT_PATH, './packages/mlz-adminer/src'),
};
