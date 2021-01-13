import React, { useState, useEffect, useLayoutEffect } from 'react';
import { appendNode2Body, simpleHash } from '../shared/utils';
import { UseDarkThemeOptions, ThemeKeyNameTypes } from './index.type';
// import * as darkColors from 'antd/lib/style/themes/dark.less';
import { AntdVersion, version, BuildTime } from '..';

const styleLinkId = simpleHash('admini-dark-theme-styles');
const darkThemePalette = {
  '--theme-bg': '#000',
  '--theme-sub-bg': '#1f1f1f',
};
const lightThemePalette = {
  '--theme-bg': '#fff',
  '--theme-sub-bg': '#041c40',
};

const useDarkTheme = (callback: Function, observed?: any, conf?: UseDarkThemeOptions) => {
  const defaultCDNPath = `https://cdn.bootcdn.net/ajax/libs/antd/${AntdVersion}/antd.dark.min.css?version=${version}&t=${BuildTime}`;
  const { darkThemeCssResourceUrl = defaultCDNPath, initialTheme = 'light' } = conf || {};

  const [theme, toggleTheme] = useState<ThemeKeyNameTypes>(initialTheme);
  const [dom, saveDom] = useState<any>(null);
  useEffect(() => {
    // observed被观察对象为true时则切换主题
    typeof observed !== 'undefined' && toggleTheme(observed ? 'dark' : 'light');
  }, [observed]);
  useLayoutEffect(() => {
    if (theme === 'dark') {
      // 当dark时
      try {
        // 为body指定dataset
        document.body.setAttribute('data-theme', 'dark');

        // 加载dark模式变量
        Object.entries(darkThemePalette).forEach(([key, color]) => {
          document.documentElement.style.setProperty(key, color);
        });

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
      // 加载light模式变量
      Object.entries(lightThemePalette).forEach(([key, color]) => {
        document.documentElement.style.setProperty(key, color);
      });
      const LinkDom = document.getElementById(styleLinkId);
      LinkDom && document.head.removeChild(LinkDom);
      saveDom(null);
      document.body.setAttribute('data-theme', 'default');
    }
    callback?.(theme);
  }, [theme]);
  return { dom };
};

export default useDarkTheme;
