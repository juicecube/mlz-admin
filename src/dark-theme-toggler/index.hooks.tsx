import React, { useState, useEffect, useLayoutEffect } from 'react';
import { appendNode2Body, simpleHash } from '../shared/utils';
import { UseDarkThemeOptions } from './index.type';
import { AntdVersion } from '..';

const styleLinkId = simpleHash('admini-dark-theme');
const useDarkTheme = (callback: Function, observed: any, conf?: UseDarkThemeOptions) => {
  const defaultCDNPath = `https://cdn.bootcdn.net/ajax/libs/antd/${AntdVersion}/antd.dark.min.css`;
  const [theme, toggleTheme] = useState<'light' | 'dark'>('light');
  const [dom, cacheDom] = useState<any>(null);
  const { darkThemeCssResourceUrl = defaultCDNPath } = conf || {};
  useEffect(() => {
    toggleTheme(observed ? 'dark' : 'light');
    callback?.(theme);
  }, [observed]);
  useLayoutEffect(() => {
    if (theme === 'dark') {
      // 当dark时，加载对应的style
      try {
        const domNode = appendNode2Body('link', {
          rel: 'stylesheet',
          href: darkThemeCssResourceUrl,
          type: 'text/css',
          id: styleLinkId,
        });
        !dom && domNode && cacheDom(domNode);
      } catch (err) {
        cacheDom(null);
        throw new Error(err);
      }
    } else {
      const LinkDom = document.getElementById(styleLinkId);
      LinkDom && document.head.removeChild(LinkDom);
      cacheDom(null);
    }
  }, [theme]);
  return { dom };
};

export default useDarkTheme;
