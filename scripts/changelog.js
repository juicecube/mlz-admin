#!/usr/bin/env node
/* eslint-disable */
const simpleGit = require('simple-git/promise');
const inquirer = require('inquirer');
const genLogs = require('./common/genChangelogFromGitLogs');

const cwd = process.cwd();
const git = simpleGit(cwd);

const genChangelog = async ($auto) => {
  const tags = await git.tags();
  const { latest } = tags;
  const tagList = tags.all.reverse();

  console.log(`previous tags detected were here: `);
  console.table(tagList);

  const { fromVersion } =
    $auto === false
      ? await inquirer.prompt([
          {
            type: 'list',
            name: 'fromVersion',
            message: `latest version is ${latest}, choose a version to generate changelogs`,
            choices: tags.all
              .reverse()
              .map((tag) => tag && tag.replace('v', ''))
              .slice(1, 6),
          },
        ])
      : { fromVersion: tagList[1].replace('v', '') };

  $auto !== false && console.log(`current tag was: ${latest}`);
  console.log(`latest detected tag code was v${fromVersion} \r\n`);

  const logs = await git.log({ from: `v${fromVersion}`, to: latest });
  return genLogs(logs, '/CHANGELOG.md');
};

module.exports = genChangelog;
