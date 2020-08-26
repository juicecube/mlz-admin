import React from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { Locale } from 'antd/lib/locale-provider';
import { default as zhLocale } from 'antd/es/locale-provider/zh_CN';

const ConfigProvider = (props: { children: React.ReactNode; locale?: Locale }) => <AntdConfigProvider locale={props.locale || zhLocale}>{props.children}</AntdConfigProvider>;
export default ConfigProvider;
