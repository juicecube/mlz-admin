import { TooltipProps } from 'antd/lib/tooltip';

export interface DecodePhoneProps extends Omit<TooltipProps, 'title'> {
  params: string;
  onReady?(tel): void;
  onError?(err): void;
}
