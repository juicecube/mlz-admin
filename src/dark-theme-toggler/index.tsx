import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import Icon from '../icon';
import useDarkTheme from './index.hooks';
import './style/index.less';

const InteralTable = (props: { onChange?: Function }) => {
  const { onChange } = props;
  const [darkness, darken] = useState(false);
  useDarkTheme(() => onChange?.(), darkness);
  return (
    <Button onClick={() => darken(!darkness)}>
      <Icon type={darkness ? 'bulb_l' : 'bulb_g'} />
    </Button>
  );
};
export default InteralTable;
