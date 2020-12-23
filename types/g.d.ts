import { KeepAliveProps } from '../src/keep-alive/index.type';

declare interface Window {
  IconScripts: URL['href'][];
  requestIdleCallback: (callback: function, options: any) => void;
  'keep-alive-store': KeepAliveProps[];
}
declare const MOCK_PROXY_HOST: string;
