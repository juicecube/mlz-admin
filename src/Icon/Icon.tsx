import React from 'react';
import { createFromIconfontCN as createFromIconfont } from '@ant-design/icons';

class IconFontScript {
  public scriptUrl: string;

  constructor($scriptUrl: URL['href']) {
    this.scriptUrl = $scriptUrl;
  }

  public replaceIconFontScript($scriptUrl: URL['href']) {
    this.scriptUrl = $scriptUrl;
  }
}
const newScript = new IconFontScript('//at.alicdn.com/t/font_1545707_47fjy8om7mg.js');
const Icon = createFromIconfont({
  scriptUrl: newScript.scriptUrl,
});

export default Icon;
export const createIconFontScript = newScript.replaceIconFontScript;
