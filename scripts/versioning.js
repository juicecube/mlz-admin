#!/usr/bin/env node
/* eslint-disable no-console */
const path = require('path');
const fetch = require('node-fetch');
const simpleGit = require('simple-git/promise');
const changelog = require('./changelog');

const pkgLerna = require('../lerna.json');
const pkgADMIN = require('../packages/mlz-admin/package.json');
const pkgADMINER = require('../packages/mlz-adminer/package.json');

// TODO 后面改成以lerna.json的版本为准
if (pkgADMIN.version !== pkgADMINER.version || pkgADMIN.version !== pkgLerna.version || pkgADMINER.version !== pkgLerna.version) {
  throw new Error('we would not support independent package releasing version');
}

const git = simpleGit(process.cwd());
const { version } = pkgLerna;
const tagPrefix = 'v';
const canPublishBranches = ['release', 'master'];

const checkVersion = async () => {
  let { versions } = await fetch('https://registry.npmjs.org/@mlz/admin').then((res) => res.json());
  versions = Object.keys(versions);
  if (versions && versions.includes(version)) {
    console.error(`Error: 版本${version}已经发布过了`, `\r\n`);
    process.exit(1);
  }
};

const checkTag = async ({ current }) => {
  // 更新当前分支
  console.log(`pulling branch is: ${current} \r\n`);
  await git.pull('origin', current, { '--tags': null, '--no-rebase': null, '--ff-only': null });

  const { taggedTags } = await git.tags();
  if (taggedTags && taggedTags.includes(`${tagPrefix}${version}`)) {
    console.error(`Error: 🏷 ${tagPrefix}${version}已经存在了`, `\r\n`);
    process.exit(1);
  }
  return `${tagPrefix}${version}`;
};

const checkBranch = async ({ current }) => {
  if (!canPublishBranches.includes(current)) {
    console.error(`Error: 没有在${canPublishBranches.join('或')}分支发布，而是${current}分支`, `\r\n`);
    process.exit(1);
  }
};

const tagTag = async (tag) => {
  const tagMessage = await changelog(process.env.AUTO === '1');
  git.addAnnotatedTag(tag, tagMessage);
  console.log(`annotated successfully, tag message is : \r\n` + tagMessage + '\r\n');
};

const pushTag = git.pushTags('origin');

(async () => {
  const status = await git.status();
  // await checkBranch(status);
  // await checkVersion();

  // 打tag
  const tag = await checkTag(status);
  if (tag) {
    console.log('🚗 taging... \r\n');
    await tagTag(tag);
    // await pushTag();
    console.log('✅ push tag successfutlly');
  } else {
    throw new Error(`no tag detected`);
  }
})();
