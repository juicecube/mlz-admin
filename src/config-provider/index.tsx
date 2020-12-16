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
}
const ConfigProvider = (props: ConfigProviderType) => {
  (window as any).__MLZ_ADMIN_VERSION__ = version;
  return <AntdConfigProvider locale={props.locale || zhLocale}>{props.children}</AntdConfigProvider>;
};
export default ConfigProvider;
