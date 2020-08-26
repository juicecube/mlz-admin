import React from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { Locale } from 'antd/lib/locale-provider';
import { default as ZH_Locale } from 'antd/es/locale-provider/zh_CN';

const ConfigProvider = (props: { children: React.ReactNode; locale?: Locale }) => <AntdConfigProvider locale={props.locale || ZH_Locale}>{props.children}</AntdConfigProvider>;
export default ConfigProvider;
