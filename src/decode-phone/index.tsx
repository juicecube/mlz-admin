import React, { useState } from 'react';
import { TooltipProps, RenderFunction } from 'antd/lib/tooltip';
import { Tooltip, message } from 'antd';
import Http from '../../service';
import { DECODE_URL } from '../../service/constants';

const INIT_TITLE = '加载中';
interface DecodePhoneProps extends Omit<TooltipProps, 'title'> {
  url?: string;
  params: string;
  onReady?(tel): void;
  onError?(err): void;
}

const DecodePhone = (props: DecodePhoneProps) => {
  const { children, params, url = DECODE_URL, onReady, onError, ...rest } = props;
  const _URL = new URL(url);
  const [title, setTitle] = useState<RenderFunction | React.ReactNode>(INIT_TITLE);
  const handleRequest = async () => {
    try {
      const tel = await new Http(_URL.origin, { timeout: 2000 }).post(_URL.pathname, {
        cipher_text: params,
      });
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
