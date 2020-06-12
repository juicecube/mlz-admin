import React from 'react';
import { createFromIconfontCN as createFromIconfont } from '@ant-design/icons/es';

class IconFontScript {
  public scriptUrls: string[];

  constructor($scriptUrl: URL['href']) {
    this.scriptUrls = [$scriptUrl];
  }

  public addIconFontScript($scriptUrl: URL['href'] | URL['href'][]) {
    const scripts = typeof $scriptUrl !== 'string' ? $scriptUrl : [$scriptUrl];
    this.scriptUrls = this.scriptUrls.concat(scripts as URL['href'][]);
  }
}
const newScript = new IconFontScript('//at.alicdn.com/t/font_1820833_rlvsnwpya0j.js');
console.log(newScript.scriptUrls);
const Icon = createFromIconfont({
  scriptUrl: [...newScript.scriptUrls, '//at.alicdn.com/t/font_1545707_47fjy8om7mg.js'],
});

export const createIconFontScript = newScript.addIconFontScript;
export default Icon;
