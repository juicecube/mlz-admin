import React, { useState, useRef } from 'react';
import { TooltipProps, RenderFunction } from 'antd/lib/tooltip';
import { Tooltip } from 'antd';
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
const isProduction = process.env.NODE_ENV === 'production';
const DecodePhone = (props: DecodePhoneProps) => {
  const { children, params: encodedTel, url, onReady, onError, ...rest } = props;
  const [title, setTitle] = useState<RenderFunction | React.ReactNode>(INIT_TITLE);
  console.table([isProduction, process.env.NODE_ENV]);
  const handleRequest = async () => {
    try {
      let decodedTel = {};
      const res = await decodePhone(encodedTel, url);
      /* eslint-disable camelcase */
      decodedTel = isProduction ? res : JSON.parse(res as string)?.phone_number;
      setTitle(decodedTel);
      onReady?.(decodedTel);
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
