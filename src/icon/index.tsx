import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons/es';
import { appendScript } from '../shared/utils';

const __window_ = window as any;

// 测试在使用这个export，所以不可以删除
export const defaultScriptUrl = '//at.alicdn.com/t/font_1820833_32ida2n9cyl.js';
__window_.IconScripts = [defaultScriptUrl];
const Icon = createFromIconfontCN({
  scriptUrl: __window_.IconScripts,
});
export default Icon;

export const createIconFontScript = (scriptUrls: URL['href'][]) => {
  // 创建script
  scriptUrls.forEach((url) => appendScript(`http:${url}`));
  // 同步当前数据
  __window_.IconScripts = __window_.IconScripts.concat(scriptUrls);
};
