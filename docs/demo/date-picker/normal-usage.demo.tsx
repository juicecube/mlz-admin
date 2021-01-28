import React from 'react';
import { Space, DatePicker } from '@mlz/admin';
import { message } from 'antd';

const { RangePicker } = DatePicker;
const commonStyle = { width: 168, marginBottom: 10 };

const changeHandler = (obj: any) => {
  message.success(`选择结果是一个${typeof obj}：${obj.toString()}`);
};

export default () => {
  return (
    <Space direction="vertical">
      {['time', '', 'date', 'week', 'month', 'quarter', 'year'].map((item) => {
        return <DatePicker picker={item} showTime={!item} key={item} style={commonStyle} onChange={changeHandler} />;
      })}
      <RangePicker onChange={changeHandler} />
    </Space>
  );
};
