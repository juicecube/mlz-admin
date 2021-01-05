import React, { useState, useEffect, useLayoutEffect } from 'react';
import { appendNode2Body } from '../shared/utils';
import { AntdVersion } from '..';

const defaultCDNPath = `https://cdn.bootcdn.net/ajax/libs/antd/${AntdVersion}/antd.dark.min.css`;
const useDarkTheme = (callback: Function, observed: any, conf?: { darkThemeCssResourceUrl?: URL['href'] }) => {
  const [theme, toggleTheme] = useState<'light' | 'dark'>('light');
  const { darkThemeCssResourceUrl = defaultCDNPath } = conf || {};
  useEffect(() => {
    toggleTheme(!!observed ? 'dark' : 'light');
    callback?.(theme);
  }, observed);
  useLayoutEffect(() => {
    if (theme === 'dark') {
      // 当dark时，加载对应的style
      appendNode2Body('style', {
        rel: 'stylesheet',
        href: darkThemeCssResourceUrl,
      });
    }
  }, [theme]);
  return { theme };
};

export default useDarkTheme;
