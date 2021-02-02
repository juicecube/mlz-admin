import React from 'react';
import { Icon, createIconFontScript, Button, Space } from '@mlz/admin';

createIconFontScript(['https://at.alicdn.com/t/font_943000_gcprvizixkl.js', 'https://at.alicdn.com/t/font_1545707_47fjy8om7mg.js']);
export default () => (
  <Space size={40}>
    <Button type="primary" icon={<Icon type="icon-atf-hero" />}>
      项目1的icon
    </Button>
    <Button icon={<Icon type="i-notificate" />}>项目2的icon</Button>
  </Space>
);
