#!/usr/bin/env node
const joinGeneratorsIntoBuffer = (...$generators) => {
  if ($generators.some((item) => typeof item !== 'function')) {
    console.error('joinBuffer\'s params must be function whoes name start with "gen"');
    return '';
  }
  return $generators.reduce((prev, curr) => (prev += `${curr()}\r\n\r\n`), '');
};

module.exports = joinGeneratorsIntoBuffer;
