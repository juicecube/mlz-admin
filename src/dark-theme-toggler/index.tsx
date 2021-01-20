import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';
import Icon from '../icon';
import useDarkTheme, { calcDefaultCDNPath } from './index.hooks';
import { DarkThemeTogglerProps } from './index.type';
import { appendNode2Body } from '../shared/utils';
import { AntdVersion, version, BuildTime } from '..';

export const preloadDarkThemeCss = (cssUrl: URL['href']) =>
  appendNode2Body('link', {
    rel: 'preload',
    href: cssUrl,
    type: 'text/css',
    as: 'style',
  });
const DarkThemeToggler = (props: DarkThemeTogglerProps) => {
  const defaultCDNPath = calcDefaultCDNPath(AntdVersion, version, BuildTime);
  const { onChange, initialTheme = 'light', preload = 5000, darkThemeCssResourceUrl = defaultCDNPath, ...others } = props;
  const [darkness, darken] = useState(initialTheme === 'dark');
  useDarkTheme(() => onChange?.(darkness ? 'dark' : 'light'), darkness);
  useEffect(() => {
    preload > 2000 &&
      setTimeout(async () => {
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
