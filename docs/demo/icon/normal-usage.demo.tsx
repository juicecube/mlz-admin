import React from 'react';
import { Icon } from '@mlz/admin';
import { Space } from 'antd';

export default () => (
  <Space size={25}>
    <Icon type="love_g" style={{ color: '#cd201f', fontSize: 96 }} />
    <Icon type="dialogue_g" style={{ color: '#1890ff', fontSize: 48 }} />
    <Icon type="emoji_happy_g" style={{ color: 'grey', fontSize: 24 }} />
  </Space>
);
