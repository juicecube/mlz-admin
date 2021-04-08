export interface IBasicHooksOptions<R = any> {
  manual: boolean;
  run(args?: unknown): Promise<R>;
  loading: boolean;
  deps: unknown[];
  init: {
    loading: boolean;
  };
  // 请求相关
  data: unknown;
  requestParams: object;
}
