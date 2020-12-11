import React, { useEffect } from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { Locale } from 'antd/lib/locale-provider';
import { ConfigProviderProps } from 'antd/lib/config-provider';
import { default as zhLocale } from 'antd/es/locale-provider/zh_CN';
import { version } from '..';
import './style/index.less';

const { requestIdleCallback } = window;
interface ConfigProviderType extends ConfigProviderProps {
  locale?: Locale;
}
let shown = false;
window.__MLZ_ADMIN_ENV__ = process.env.NODE_ENV as any;
const ConfigProvider = (props: ConfigProviderType) => {
  // eslint-disable-next-line no-console
  const consoleVersion = () => {
    console.table({ [`@mlz/admin version`]: version });
    window.__MLZ_ADMIN_VERSION__ = version;
  };
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
