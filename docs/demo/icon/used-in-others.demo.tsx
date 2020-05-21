import React from 'react';
import Icon from '@/Icon/Icon';
import { Space, Tag, Popconfirm } from 'antd';
import Button from '@/Button/Button';

export default () => (
  <Space size={50}>
    <Button type="primary" icon={<Icon type="i-play" />}>
      点我
    </Button>
    <Tag icon={<Icon type="i-mute" />} color="#cd201f">
      朕是个Tag
    </Tag>
    <Popconfirm title="戳我干嘛？" icon={<Icon type="i-danmu" />}>
      <a href="#">戳我</a>
    </Popconfirm>
  </Space>
);
