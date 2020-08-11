import React from 'react';
import { InputNumber } from 'antd';

export default () => {
  const onChange = (value) => {
    console.log('value', value);
  };
  return <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />;
};
