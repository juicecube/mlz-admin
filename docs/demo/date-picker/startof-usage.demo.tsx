import React from 'react';
import { Space } from 'antd';
import DatePicker from '../../../src/date-picker';

export default () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} startOf="day" />
      <DatePicker onChange={onChange} picker="week" startOf="week" />
      <DatePicker onChange={onChange} picker="month" startOf="month" />
      <DatePicker onChange={onChange} picker="quarter" startOf="quarter" />
      <DatePicker onChange={onChange} picker="year" startOf="year" />
    </Space>
  );
};
