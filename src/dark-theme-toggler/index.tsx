import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';
import Icon from '../icon';
import useDarkTheme from './index.hooks';
import { DarkThemeTogglerProps } from './index.type';

const DarkThemeToggler = (props: DarkThemeTogglerProps) => {
  const { onChange, ...others } = props;
  const [darkness, darken] = useState(false);
  useDarkTheme(() => onChange?.(darkness ? 'dark' : 'light'), darkness);
  return <Switch checkedChildren={<Icon type="bulb_g" />} unCheckedChildren={<Icon type="bulb_l" />} defaultChecked={!darkness} onChange={() => darken(!darkness)} {...others} />;
};
export default DarkThemeToggler;
