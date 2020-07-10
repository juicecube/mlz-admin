import React from 'react';
import { createFromIconfontCN as createFromIconfont } from '@ant-design/icons/es';

export class IconFontScript {
  public scriptUrls: string[];

  constructor($scriptUrl: URL['href'] = '//at.alicdn.com/t/font_1820833_zgnaif28led.js') {
    this.scriptUrls = [$scriptUrl];
  }

  public addIconFontScript($scriptUrl: URL['href'] | URL['href'][]) {
    const scripts = typeof $scriptUrl !== 'string' ? $scriptUrl : [$scriptUrl];
    this.scriptUrls = this.scriptUrls.concat(scripts as URL['href'][]);
  }
}
const newScript = new IconFontScript();
const Icon = createFromIconfont({
  scriptUrl: [...newScript.scriptUrls],
});

export const createIconFontScript = newScript.addIconFontScript;
export default Icon;
