import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';
import Icon from '../icon';
import useDarkTheme, { calcDefaultCDNPath } from './index.hooks';
import { DarkThemeTogglerProps } from './index.type';
import { appendNode2Body } from '../shared/utils';
import { AntdVersion, version, BuildTime, EScences } from '..';

export const preloadDarkThemeCss = (cssUrl: URL['href']) =>
  appendNode2Body('link', {
    rel: 'preload',
    href: cssUrl,
    type: 'text/css',
    as: 'style',
  });
const { NODE_ENV } = process.env;
const DarkThemeToggler = (props: DarkThemeTogglerProps) => {
  const defaultCDNPath = calcDefaultCDNPath(AntdVersion, version, BuildTime);
  const { onChange, initialTheme = 'light', preload = 3000, darkThemeCssResourceUrl = defaultCDNPath, ...others } = props;
  const [darkness, darken] = useState(initialTheme === 'dark');

  useDarkTheme(() => {
    onChange?.(darkness ? 'dark' : 'light');
  }, darkness);
  useEffect(() => {
    !darkness &&
      setTimeout(async () => {
        // 这里为切换的流畅性做了妥协。强制执行了副作用，无论用户是否真正使用此功能。
        try {
          await preloadDarkThemeCss(darkThemeCssResourceUrl);
        } catch (err) {
          throw new Error(err);
        }
      }, preload);
  }, []);

  return <Switch checkedChildren={<Icon type="bulb_g" />} unCheckedChildren={<Icon type="bulb_l" />} defaultChecked={!darkness} onChange={() => darken(!darkness)} {...others} />;
};
export default DarkThemeToggler;
