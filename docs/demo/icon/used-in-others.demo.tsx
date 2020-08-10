import React from 'react';
import Icon from '@/Icon/Icon';
import { Space, Tag, Popconfirm } from 'antd';
import Button from '@/Button/Button';

export default () => (
  <Space size={40}>
    <Button type="primary" icon={<Icon type="like_yes_g" />}>
      点我
    </Button>
    <Tag icon={<Icon type="piechart_g" />} color="#cd201f">
      朕是个Tag
    </Tag>
    <Popconfirm title="戳我干嘛？" icon={<Icon type="warning2_g" />}>
      <a href="#">
        <Icon type="refresh_l" />
        戳我
      </a>
    </Popconfirm>
  </Space>
);
