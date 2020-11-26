import React, { useState } from 'react';
import { TooltipProps, RenderFunction } from 'antd/lib/tooltip';
import { Tooltip } from 'antd';
import Http from '../../service';
import { DECODE_URL } from '../../service/constants';

const INIT_TITLE = '加载中';

interface IProps extends Omit<TooltipProps, 'title'> {
  url?: string;
  params: string;
}

const DecodePhone = (props: IProps) => {
  const { children, params, url = DECODE_URL, ...rest } = props;
  const _URL = new URL(url);
  const [title, setTitle] = useState<RenderFunction | React.ReactNode>(INIT_TITLE);
  const handleRequest = () => {
    new Http(_URL.origin)
      .post(_URL.pathname, {
        cipher_text: params,
      })
      .then((res: any) => {
        setTitle(res);
      })
      .catch((err) => {
        console.error('error', err);
      });
  };

  return (
    <Tooltip title={title} trigger="click" {...rest} onVisibleChange={(visible) => visible && title === INIT_TITLE && handleRequest()}>
      {children}
    </Tooltip>
  );
};

export default DecodePhone;
