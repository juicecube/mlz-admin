import React, { useState, useEffect } from 'react';
import { TooltipProps } from 'antd/lib/tooltip';
import { Tooltip } from 'antd';
import { Tel, DECODE_URL } from '../shared/service/decode-phone/model';

export const ERROR_TITLE = '手机号解码失败';
export const INIT_TITLE = '加载中';
interface DecodePhoneProps extends Omit<TooltipProps, 'title'> {
  url?: string;
  params: string;
  onReady?(tel): void;
  onError?(err): void;
}

const DecodePhone = (props: DecodePhoneProps) => {
  const { children, params, url = DECODE_URL, onReady, onError, ...rest } = props;
  const [title, setTitle] = useState(INIT_TITLE as any);

  const decode = () => {
    const phone = new Tel(params);
    phone.decodePhone().then(() => {
      const tel = phone.toString();
      tel && setTitle(tel);
    });
  };

  return (
    <Tooltip {...rest} title={title} trigger="click" onVisibleChange={(visible) => visible && [INIT_TITLE, ERROR_TITLE].includes(title) && decode()}>
      {children}
    </Tooltip>
  );
};

export default DecodePhone;
