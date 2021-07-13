export type supportedCacheMethods = 'get' | 'option' | 'head';
export interface IBasicHooksOptions<R = any> {
  manual: boolean;
  run(args?: unknown): Promise<R>;
  abort(): Promise<boolean>;
  loading: boolean;
  deps: unknown[];
  // 是否开启防抖
  debounce: boolean;
  // 是否开启节流
  throttle: boolean;
  // 是否开启缓存(暂时只支持get方法)
  cache: boolean | number;
  //
  init: {
    loading: boolean;
  };
  // 请求相关
  data: unknown;
  requestParams: object;
}
