import React from 'react';
import { Select, Space } from 'antd';
import { SelectRange } from '@mlz/admin';

export default () => {
  const onChange = ([begin, end]) => {
    console.log([begin, end]);
  };
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
      <SelectRange selectOptions={courseRangeOptions} currentValue={currentValue} onChange={onChange} />
    </Space>
  );
};
