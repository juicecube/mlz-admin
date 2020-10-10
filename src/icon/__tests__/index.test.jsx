import React from 'react';
import Icon, { createIconFontScript, defaultScriptUrl } from '..';

describe('📦  Icon', () => {
  // 添加多个script url
  test('one array type script urls', () => {
    const testers = ['//at.alicdn.com/t/font_1545707_47fjy8om7mg.js', '//at.alicdn.com/t/font_943000_gcprvizixkl.js'];
    createIconFontScript(testers);
    expect(window.IconScripts).toStrictEqual([defaultScriptUrl, ...testers]);
  });
});
