#!/usr/bin/env node
/* eslint-disable no-console */
const path = require('path');
const fetch = require('node-fetch');
const simpleGit = require('simple-git/promise');
const genChangelog = require('./changelog');

const pkg = require('../package.json');

const git = simpleGit(process.cwd());
const { version } = pkg;
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
  console.log(`git is pulling ${current} \r\n`);
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
    // process.exit(1);
  }
};

const tagTag = async (tag) => {
  // 覆盖simple tag为tag
  git.addAnnotatedTag(tag, `[](https://github.com/juicecube/mlz-admin/releases/tag/${tag})`);
  console.log(`🏷 ${tag} successfutlly`);
};

(async () => {
  const status = await git.status();
  // 校验分支是否合法
  // await checkBranch(status);

  // 校验版本是否合法
  await checkVersion();

  // 打tag
  const tag = await checkTag(status);

  if (tag) {
    // 根据tag差，生成changelog内容
    const tagMessage = await genChangelog(process.env.AUTO === '1');

    console.log('ready for tag with changelog: \r\n', tagMessage);

    await tagTag(tag);
    await git.pushTags('origin');
  } else {
    throw new Error(`no tag detected`);
  }
})();
