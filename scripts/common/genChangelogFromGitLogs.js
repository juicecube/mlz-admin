#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const { groupBy, upperFirst } = require('lodash');
const { SRC_PATH } = require('./constants');
const createFile = require('./createFile');

const ghPrefix = 'https://github.com/';
const ghcommitHtmlPrefix = ghPrefix + 'juicecube/mlz-admin/commit/';
const recordingTypes = ['chore', 'perf', 'refactor', 'style', 'fix', 'feat'];
const administrators = ['milobluebell', 'jeekliang', 'milo ma', 'liangjiaxing'];
const getLogTypeScopeAndSubject = ($gitLog) => {
  const divider = ': ';
  const splitted = $gitLog.split(new RegExp(`(${recordingTypes.join('|')})*${divider}`));
  const [head = '', subject = ''] = splitted.length >= 3 ? [splitted[1], splitted[splitted.length - 1]] : ['', ''];
  const [type = '', scope = ''] = head.match(/[a-zA-Z]+/g) || [];
  return {
    type,
    scope,
    subject,
  };
};

const msgValidate = ($str) => {
  return $str.replace(/[0-9a-zA-Z]/g, '').trim().length > 0;
};

const commitLogIterator = (prev, curr, indent = false) => {
  const indentNumber = indent ? 2 : 0;
  const validation = msgValidate(curr.subject);
  const { subject, hash, type, authorName } = curr;
  return (prev +=
    validation && type
      ? `${' '.repeat(indentNumber)}- ${subject} [${hash.substr(0, 7)}](${ghcommitHtmlPrefix}${hash})` +
        (authorName && !administrators.includes(authorName) ? ` 👤 ${upperFirst(authorName)} 👍` : '') +
        '\r\n'
      : ``);
};

const genLogs = ($gitLogs, $fileToPath = '') => {
  const { all } = $gitLogs;
  if (all && all.length) {
    const logs = all.reduce((prev, curr) => {
      return prev.concat({
        ...curr,
        ...getLogTypeScopeAndSubject(curr.message),
      });
    }, []);
    const groupedLogs = groupBy(logs, 'scope');
    const scopes = Object.keys(groupedLogs).reverse();
    const scopedResult = scopes
      .filter((scope) => !!scope)
      .reduce((prev, curr) => {
        return (prev += `- 📦 ${upperFirst(curr)}\r\n` + groupedLogs[curr].reduce((commit, currCommit) => commitLogIterator(commit, currCommit, !!2), '') + '\r\n');
      }, '');
    const unscopedResult = scopes.filter((scope) => !scope).reduce((prev, curr) => (prev += groupedLogs[curr].reduce((commit, currCommit) => commitLogIterator(commit, currCommit, !!0), '')), '');

    // 如果传入了$fileToPath，则输出一个文件到指定位置并返回boolean，而非返回字符串。
    const logResult = scopedResult + unscopedResult;
    return $fileToPath ? createFile('/release_messages.md', Buffer.from(logResult)) : logResult;
  } else return [];
};
module.exports = genLogs;
