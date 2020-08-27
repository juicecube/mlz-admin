import React from 'react';
import Icon, { IconFontScript } from '../Icon';
import testMount from '../../../tests/testMount';

describe('📦  Icon', () => {
  let newIconInstance = null;

  beforeEach(() => {
    newIconInstance = new IconFontScript('//at.alicdn.com/t/font_1820833_zgnaif28led.js');
  });

  // 添加单个script url
  test('one new string type script url', () => {
    newIconInstance.addIconFontScript('//at.alicdn.com/t/font_1545707_47fjy8om7mg.js');
    expect(newIconInstance.scriptUrls).toStrictEqual(['//at.alicdn.com/t/font_1820833_zgnaif28led.js', '//at.alicdn.com/t/font_1545707_47fjy8om7mg.js']);
  });

  // 添加多个script url
  test('one array type script urls', () => {
    newIconInstance.addIconFontScript(['//at.alicdn.com/t/font_1545707_47fjy8om7mg.js', '//at.alicdn.com/t/font_943000_gcprvizixkl.js']);
    expect(newIconInstance.scriptUrls).toEqual(['//at.alicdn.com/t/font_1820833_zgnaif28led.js', '//at.alicdn.com/t/font_1545707_47fjy8om7mg.js', '//at.alicdn.com/t/font_943000_gcprvizixkl.js']);
  });
});
