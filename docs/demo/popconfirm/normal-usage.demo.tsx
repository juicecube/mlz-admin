import React from 'react';
import { Popconfirm, message } from 'antd';

export default () => {
  return (
    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
      <a href="#">Delete</a>
    </Popconfirm>
  );
};
