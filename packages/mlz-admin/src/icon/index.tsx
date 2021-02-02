import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons/es';
import { appendScript } from '../shared/utils';

// 测试在使用这个export，所以不可以删除
export const defaultScriptUrl = 'https://at.alicdn.com/t/font_1820833_32ida2n9cyl.js';
const Window = window as any;
Window.IconScripts = [defaultScriptUrl];
const Icon = createFromIconfontCN({
  scriptUrl: Window.IconScripts,
});
export default Icon;

export const createIconFontScript = (scriptUrls: URL['href'][]) => {
  // 创建script
  scriptUrls.forEach((url) => appendScript(`https:${url}`));
  // 同步当前数据
  Window.IconScripts = Window.IconScripts.concat(scriptUrls);
};
