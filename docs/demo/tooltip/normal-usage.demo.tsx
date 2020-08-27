import React from 'react';
import { Tooltip } from 'antd';

export default () => {
  return (
    <Tooltip title="prompt text">
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  );
};
