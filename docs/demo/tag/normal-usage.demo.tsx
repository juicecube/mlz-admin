import React from 'react';
import { Tag } from 'antd';

export default () => {
  const log = (e) => {
    console.log(e);
  };

  const preventDefault = (e) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  };
  return (
    <div>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
      </Tag>
      <Tag closable onClose={log}>
        Tag 2
      </Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
    </div>
  );
};
