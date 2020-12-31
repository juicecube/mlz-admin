import React from 'react';
import { SelectRange, message, Select, Space } from '@mlz/admin';

export default () => {
  // 下拉项数据
  const courseRangeOptions = [
    {
      key: 1,
      name: '课程-1',
    },
    {
      key: 2,
      name: '课程-2',
    },
    {
      key: 3,
      name: '课程-3',
    },
  ];
  const currentValue = [2, 2];
  return (
    <Space direction="vertical">
      <SelectRange selectOptions={courseRangeOptions} currentValue={currentValue} />
    </Space>
  );
};
