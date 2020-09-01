import React from 'react';
import { Icon } from '@mlz/admin';
import { Space } from 'antd';

export default () => (
  <Space size={25}>
    <Icon type="google_g" />
    <Icon type="add_rectangle_g" style={{ color: '#cd201f' }} />
    <Icon type="cloud_g" style={{ color: '#1890ff' }} />
  </Space>
);
