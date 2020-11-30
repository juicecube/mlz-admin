#!/usr/bin/env node
const path = require('path');
const fetch = require('node-fetch');
const simpleGit = require('simple-git/promise');
const changelog = require('./changelog');

const pkg = require('../package.json');

const git = simpleGit(process.cwd());
const { version } = pkg;
const tagPrefix = 'v';
const canPublishBranches = ['HEAD', 'release'];

const checkVersion = async () => {
  let { versions } = await fetch('http://registry.npmjs.org/@mlz/admin').then((res) => res.json());
  versions = Object.keys(versions);
  if (versions && versions.includes(version)) {
    console.error(`Error: 版本${version}已经发布过了`, `\r\n`);
    process.exit(1);
  }
};

const checkTag = async () => {
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
  console.log(tagMessage);
  git.addAnnotatedTag(tag, tagMessage);
};

const pushTag = async () => {
  git.pushTags('origin', () => {
    console.log(`Success✅: ag推送成功`, `\r\n`);
  });
};

(async () => {
  const status = await git.status();
  await checkBranch(status);
  await checkVersion();
  const tag = await checkTag();
  if (tag) {
    await tagTag(tag);
    await pushTag();
  }
})();
