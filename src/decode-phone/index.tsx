import React, { useState } from 'react';
import { TooltipProps, RenderFunction } from 'antd/lib/tooltip';
import { Tooltip, message } from 'antd';
import { EncodePhoneModel } from './model';

const INIT_TITLE = '加载中';
interface DecodePhoneProps extends Omit<TooltipProps, 'title'> {
  params: string;
  onReady?(tel): void;
  onError?(err): void;
}

const DecodePhone = (props: DecodePhoneProps) => {
  const { children, params: cipherText, onReady, onError, ...rest } = props;
  const [title, setTitle] = useState<RenderFunction | React.ReactNode>(INIT_TITLE);
  const handleRequest = async () => {
    try {
      const decodePhone = new EncodePhoneModel(cipherText);
      const tel = await decodePhone.fetch();
      setTitle(tel);
      onReady?.(tel);
    } catch (err) {
      onError?.(err);
      message.error('network error', err);
    }
  };
  return (
    <Tooltip {...rest} title={title} trigger="click" onVisibleChange={(visible) => visible && title === INIT_TITLE && handleRequest()}>
      {children}
    </Tooltip>
  );
};

export default DecodePhone;
