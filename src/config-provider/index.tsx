import React, { useEffect } from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { Locale } from 'antd/lib/locale-provider';
import { ConfigProviderProps } from 'antd/lib/config-provider';
import { default as zhLocale } from 'antd/es/locale-provider/zh_CN';
import { version } from '..';
import './style/index.less';

const Window = window as any;
const { requestIdleCallback } = Window;
interface ConfigProviderType extends ConfigProviderProps {
  locale?: Locale;
  defaultTheme?: boolean;
}
let shown = false;
const ConfigProvider = (props: ConfigProviderType): JSX.Element => {
  const consoleVersion = () => console.table({ [`@mlz/admin version`]: version });
  if (!shown) {
    if (requestIdleCallback) {
      requestIdleCallback(() => consoleVersion(), { timeout: 3000 });
    } else {
      consoleVersion();
    }
    shown = true;
  }
  return <AntdConfigProvider locale={props.locale || zhLocale}>{props.children}</AntdConfigProvider>;
};
export default ConfigProvider;
