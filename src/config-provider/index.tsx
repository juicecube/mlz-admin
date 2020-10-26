import React, { useEffect } from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { Locale } from 'antd/lib/locale-provider';
import { default as zhLocale } from 'antd/es/locale-provider/zh_CN';
import { appendScript } from '../shared/utils';

const ConfigProvider = (props: { children: React.ReactNode; locale?: Locale; defaultTheme?: boolean }) => {
  const { locale, defaultTheme } = props;
  useEffect(() => {
    if (defaultTheme !== true) {
      // appendScript('https://cdn.bootcdn.net/ajax/libs/less.js/3.9.0/less.min.js');
      // appendScript(
      //   null,
      //   `
      //   less.modifyVars({
      //     '@primary-color': '#cacaca',
      //     '@link-color': '#1890ff',
      //     '@success-color': '#52c41a',
      //   });
      // `,
      // );
    }
  }, []);
  return <AntdConfigProvider locale={locale || zhLocale}>{props.children}</AntdConfigProvider>;
};
export default ConfigProvider;
