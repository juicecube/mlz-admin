import React, { useEffect } from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { Locale } from 'antd/lib/locale-provider';
import { default as zhLocale } from 'antd/es/locale-provider/zh_CN';
import { version } from '..';
import './style/index.less';

const { requestIdleCallback } = window;
const ConfigProvider = (props: { children: React.ReactNode; locale?: Locale; defaultTheme?: boolean }) => {
  const consoleVersion = () => console.table({ [`@mlz/admin version`]: version });
  if (requestIdleCallback) {
    requestIdleCallback(() => consoleVersion(), { timeout: 3000 });
  } else {
    consoleVersion();
  }
  return <AntdConfigProvider locale={props.locale || zhLocale}>{props.children}</AntdConfigProvider>;
};
export default ConfigProvider;
