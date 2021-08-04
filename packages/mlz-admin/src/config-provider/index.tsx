import React from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { Locale } from 'antd/lib/locale-provider';
import { ConfigProviderProps } from 'antd/lib/config-provider';
import { default as zhLocale } from 'antd/es/locale-provider/zh_CN';
import { version } from '..';
import './index.less';

interface ConfigProviderType extends ConfigProviderProps {
  locale?: Locale;
}

const Window = window as any;
Window.__MLZ_ADMIN_VERSION__ = version;
Window.__MLZ_ADMIN_RUNTIME_ENV__ = process.env.NODE_ENV;
Window.__MLZ_ADMIN_BUILD_ENV__ = '$THIS_WILL_BE_EMPTY_AFTER_DIST$' ? 'development' : 'production';

const ConfigProvider = (props: ConfigProviderType) => <AntdConfigProvider locale={props.locale || zhLocale}>{props.children}</AntdConfigProvider>;
export default ConfigProvider;
