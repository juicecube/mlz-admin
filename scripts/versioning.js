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
const canPublishBranches = ['release'];

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

const generateTag = async (tag) => {
  git.addTag(tag, () => {
    console.log(`Success: 🏷 ${tag} generated successfully`, `\r\n`);
  })
}

const pushTag = async () => {
  git.addRemote('origin', 'https://github.com/juicecube/mlz-admin.git').pushTags('origin', () => {
    console.log(`Success✅: ag推送成功`, `\r\n`);
  })
}

(async () => {
  const status = await git.status();
  await checkBranch(status);
  await checkVersion();
  const tag = await checkTag();
  if (tag) {
    await generateTag(tag);
    await pushTag();
  }
})();
