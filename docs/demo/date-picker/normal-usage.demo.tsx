import React from 'react';
import { Space } from '@mlz/admin';
import DatePicker from '../../../src/date-picker';

export default () => {
  return (
    <Space direction="vertical">
      <DatePicker />
      <DatePicker picker="week" />
      <DatePicker picker="month" />
      <DatePicker picker="quarter" />
      <DatePicker picker="year" />
    </Space>
  );
};
