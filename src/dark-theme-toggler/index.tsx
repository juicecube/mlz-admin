import React, { useState } from 'react';
import { Switch } from 'antd';
import Icon from '../icon';
import useDarkTheme from './index.hooks';
import './style/index.less';

const DarkThemeToggler = (props: { onChange?: Function }) => {
  const { onChange } = props;
  const [darkness, darken] = useState(false);
  useDarkTheme(() => onChange?.(), darkness);
  return <Switch checkedChildren={<Icon type="bulb_l" />} unCheckedChildren={<Icon type="bulb_g" />} defaultChecked={darkness} onChange={() => darken(!darkness)} />;
};
export default DarkThemeToggler;
