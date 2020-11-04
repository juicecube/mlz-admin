import React, { useEffect } from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { Locale } from 'antd/lib/locale-provider';
import { default as zhLocale } from 'antd/es/locale-provider/zh_CN';
import './style/index.less';

const ConfigProvider = (props: { children: React.ReactNode; locale?: Locale; defaultTheme?: boolean }) => {
  return <AntdConfigProvider locale={props.locale || zhLocale}>{props.children}</AntdConfigProvider>;
};
export default ConfigProvider;
