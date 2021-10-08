#!/usr/bin/env node
const joinMakersIntoBuffer = (...$makers) => {
  if ($makers.some((item) => typeof item !== 'function')) {
    // eslint-disable-next-line no-console
    console.error('joinBuffer\'s params must be function whoes name start with "gen"');
    return '';
  }
  return $makers.reduce((prev, curr) => (prev += `${curr()}\r\n\r\n`), '');
};

module.exports = joinMakersIntoBuffer;
