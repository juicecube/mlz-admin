import React from 'react';
import { Space } from '@mlz/admin';
import DatePicker from '../../../src/date-picker';

const { RangePicker } = DatePicker;

export default () => {
  return (
    <Space direction="vertical">
      <DatePicker startOf="day" />
      <DatePicker picker="week" startOf="week" />
      <DatePicker picker="month" startOf="month" />
      <DatePicker picker="quarter" startOf="quarter" />
      <DatePicker picker="year" startOf="year" />
      <RangePicker returnUnixValue />
    </Space>
  );
};
