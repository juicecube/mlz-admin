import React, { useState, useEffect, useLayoutEffect } from 'react';
import { appendNode2Body, simpleHash } from '../shared/utils';
import { UseDarkThemeOptions } from './index.type';
import { AntdVersion } from '..';

const styleLinkId = simpleHash('admini-dark-theme-styles');
const styleVarsId = simpleHash('admini-dark-theme-vars');

const useDarkTheme = (callback: Function, observed: any, conf?: UseDarkThemeOptions) => {
  const defaultCDNPath = `https://cdn.bootcdn.net/ajax/libs/antd/${AntdVersion}/antd.dark.min.css`;
  const [theme, toggleTheme] = useState<'light' | 'dark'>('light');
  const [dom, saveDom] = useState<any>(null);
  const { darkThemeCssResourceUrl = defaultCDNPath } = conf || {};
  useEffect(() => {
    toggleTheme(observed ? 'dark' : 'light');
    callback?.(theme);
  }, [observed]);
  useLayoutEffect(() => {
    if (theme === 'dark') {
      // 当dark时
      try {
        // 为body指定dataset
        document.body.setAttribute('data-theme', 'dark');

        // 加载dark模式变量
        document.documentElement.style.setProperty('--theme-bg', 'black');

        // 下载dark-theme css文件
        const domNode = appendNode2Body(
          'link',
          {
            rel: 'stylesheet',
            href: darkThemeCssResourceUrl,
            type: 'text/css',
            id: styleLinkId,
          },
          'head',
        ).then((link) => {
          link && !dom && saveDom(domNode);
        });
      } catch (err) {
        saveDom(null);
        throw new Error(err);
      }
    } else {
      document.documentElement.style.setProperty('--theme-bg', 'white');
      const LinkDom = document.getElementById(styleLinkId);
      LinkDom && document.head.removeChild(LinkDom);
      saveDom(null);
      document.body.setAttribute('data-theme', 'default');
    }
  }, [theme]);
  return { dom };
};

export default useDarkTheme;
