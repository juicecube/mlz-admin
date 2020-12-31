import React, { useState } from 'react';
import { RenderFunction } from 'antd/lib/tooltip';
import { DecodePhoneProps } from './index.type';
import { Tooltip } from 'antd';
import { default as Phone } from './model';

const isCompiled = !'$THIS_WILL_BE_EMPTY_AFTER_DIST$';

export const INIT_TITLE = '加载中';
const DecodePhone = (props: DecodePhoneProps) => {
  const { children, params: cipherText, onReady, onError, ...rest } = props;
  const [title, setTitle] = useState<RenderFunction | React.ReactNode>(INIT_TITLE);
  const handleRequest = async () => {
    try {
      const encodedPhone = Phone.create(cipherText);
      const tel = await encodedPhone.decode();
      const result = isCompiled ? tel : JSON.parse(tel).phone_number;
      setTitle(result);
      onReady?.(result);
    } catch (err) {
      onError?.(err);
      throw new Error(err);
    }
  };
  return (
    <Tooltip {...rest} title={title} trigger="click" onVisibleChange={(visible) => visible && title === INIT_TITLE && handleRequest()}>
      {children}
    </Tooltip>
  );
};

export default DecodePhone;
