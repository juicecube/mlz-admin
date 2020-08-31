#!/usr/bin/env node
/* eslint-disable import/no-dynamic-require */
const path = require('path');
const fetch = require('node-fetch');
const simpleGit = require('simple-git/promise');

const cwd = process.cwd();
const pkg = require(path.resolve(cwd, 'package.json'));

const git = simpleGit(cwd);
const { version } = pkg;
const tagPrefix = 'v';

const checkVersion = async () => {
  const { versions } = await fetch('http://registry.npmjs.org/@mlz/admin').then((res) => res.json());
  if (versions && versions.includes(version)) {
    console.error(`Error: 版本${version}已经发布过了`, `\r\n`);
    process.exit(1);
  }
};

const checkTag = async () => {
  const { all } = await git.tags();
  if (all && all.includes(`${tagPrefix}${version}`)) {
    console.error(`Error: tag:${tagPrefix}${version}已经存在了`, `\r\n`);
    process.exit(1);
  }
};

const checkBranch = async ({ current }) => {
  if (current !== 'master' && current !== 'staging') {
    console.error(`Error: 没有站在master或staging分支发布，而是${current}`, `\r\n`);
    process.exit(1);
  }
};

const versioning = async () => {
  const status = await git.status();
  await checkVersion();
  await checkTag();
  await checkBranch(status);
  // git.addTag(`${tagPrefix}${version}`, () => console.log(`检查完成并且打上标签,${tagPrefix}${version}`, `\r\n`));
};
versioning();
