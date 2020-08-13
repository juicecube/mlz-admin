import React, { useState } from 'react';
import { Slider, Switch } from 'antd';

export default () => {
  const [disabled, setDisabled] = useState(false);

  const handleDisabledChange = (value) => {
    setDisabled(value);
  };

  return (
    <div>
      <Slider defaultValue={30} disabled={disabled} />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      Disabled: <Switch size="small" checked={disabled} onChange={handleDisabledChange} />
    </div>
  );
};
