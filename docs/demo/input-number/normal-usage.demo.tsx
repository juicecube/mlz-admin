import React from 'react';
import { InputNumber } from 'antd';

export default () => {
  return <InputNumber min={1} max={10} defaultValue={3} />;
};
