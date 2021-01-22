#!/usr/bin/env node
/* eslint-disable no-console */
const path = require('path');
const { ROOT_PATH } = require('./common/constants');
const copy = require('./common/copyFile');

const antdDarkCssFilePath = ROOT_PATH + '/node_modules/antd/dist/antd.dark.css';
const outputRelativeDir = '/public';
const cssFileName = 'antd.dark.css';
const filePath = ROOT_PATH + `${outputRelativeDir}/${cssFileName}`;
copy(antdDarkCssFilePath, filePath);
