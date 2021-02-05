import React, { useState } from 'react';
import { RenderFunction } from 'antd/lib/tooltip';
import { DecodePhoneProps } from './index.type';
import { message, Tooltip } from 'antd';
import { default as Phone } from './model';
import { isCompiled } from '../service/constant';

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
      // throw new Error(err);
    }
  };
  return (
    <Tooltip
      {...rest}
      title={title}
      trigger="click"
      onVisibleChange={(visible) => {
        visible && title === INIT_TITLE && handleRequest();
      }}>
      <span>{children}</span>
    </Tooltip>
  );
};

export default DecodePhone;
