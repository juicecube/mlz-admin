#!/usr/bin/env node
/* eslint-disable no-console */
// 搬每个组建的style/index.css过来，以支持ssr

const fs = require('fs');
const path = require('path');

const { SRC_PATH, ADMINER_SRC_PATH, SERVICE_PATH } = require('./common/constants');