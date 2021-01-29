#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');

const genExports = require('./common/genExports');
const genVersion = require('./common/genVersion');
const genBuildTime = require('./common/genBuildTime');
const genSupporttingEnv = require('./common/genSupporttingEnv');
const joinGeneratorsIntoBuffer = require('./common/joinGeneratorsIntoBuffer');
const createFile = require('./common/createFile');

createFile('/src/index.tsx', Buffer.from(`${joinGeneratorsIntoBuffer(genVersion, genBuildTime, genSupporttingEnv)}${genExports()}`));
