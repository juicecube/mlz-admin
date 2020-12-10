import React, { useState, useRef } from 'react';
import { TooltipProps, RenderFunction } from 'antd/lib/tooltip';
import { Tooltip, message } from 'antd';
import { decodePhone } from '../shared/service';

interface DecodePhoneProps extends Omit<TooltipProps, 'title'> {
  // 待解手机号码
  params: string;
  // 解码成功时的回调
  onReady?(tel): void;
  // 解码错误时的回调
  onError?(err): void;
  // 更改解码手机号的请求地址
  url?: string;
}

export const INIT_TITLE = '加载中';
const DecodePhone = (props: DecodePhoneProps) => {
  const { children, params, url, onReady, onError, ...rest } = props;
  const [title, setTitle] = useState<RenderFunction | React.ReactNode>(INIT_TITLE);
  const handleRequest = async () => {
    try {
      const tel = await decodePhone(params, url);
      setTitle(tel);
      onReady?.(tel);
    } catch (err) {
      onError?.(err);
    }
  };
  return (
    <Tooltip {...rest} title={title} trigger="click" onVisibleChange={(visible) => visible && title === INIT_TITLE && handleRequest()}>
      <span>{children}</span>
    </Tooltip>
  );
};

export default DecodePhone;
