import React from 'react';
import Icon from '@/Icon/Icon';
import { Space } from 'antd';

export default () => (
  <Space size={50}>
    <Icon type="ico_suggest_gift_l" style={{ color: 'red' }} />
    <Icon type="i-mute" />
    <Icon type="i-danmu" style={{ color: 'red' }} />
  </Space>
);
