import React from 'react';
import { Tag } from 'antd';

export default () => {
  return (
    <div>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
      </Tag>
      <Tag closable>Tag 2</Tag>
      <Tag closable>Prevent Default</Tag>
    </div>
  );
};
