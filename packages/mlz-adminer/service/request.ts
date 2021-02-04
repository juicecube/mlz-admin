import { extend, RequestOptionsInit } from 'umi-request';

/**
 * 静态配置
 */
const config = {
  'open-service': {
    development: `https://dev-open-service.codemao.cn`,
    test: `https://test-open-service.codemao.cn`,
    staging: `https://staging-open-service.codemao.cn`,
    production: `https://open-service.codemao.cn`,
  },
  'internal-account': {
    development: 'https://dev-internal-account-api.codemao.cn/',
    test: 'https://test-internal-account-api.codemao.cn/',
    staging: 'https://staging-internal-account-api.codemao.cn/',
    production: 'https://internal-account-api.codemao.cn/',
  },
};

/**
 * 组件内动态配置
 */
const env = process.env.NODE_ENV || 'development';

type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer E)[] ? E : never;

export const supporttedMethods = ['get', 'post', 'put', 'patch', 'delete', 'head', 'option'] as const;
interface IOptions extends RequestOptionsInit {
  data?: Object;
  params?: Object;
  onFail(failedBody: any): void;
  onOk(okBody: any): void;
  onCancel?(): void;
  host?: URL['href'];
}

const umiRequest = extend({ timeout: 3000, responseType: 'json', credentials: 'include' });
umiRequest.interceptors.request.use((url: URL['href'], reqOpts: Partial<IOptions>) => {
  return {
    url,
    reqOpts,
  };
});

umiRequest.interceptors.response.use(async (response, resOpts: Partial<IOptions>) => {
  const { status } = response;
  const { onOk, onFail } = resOpts;
  const data = response.clone().json();
  if (status >= 200 && status < 300) {
    onOk?.(data);
  } else {
    onFail?.(data);
  }
  return response;
});

export type TSupporttedMethods = ElementOf<typeof supporttedMethods>;
export type IHttpObject = Record<TSupporttedMethods, (url: URL['href'], opts?: Partial<IOptions>) => Promise<Response>>;
// @ts-ignore
const $http: IHttpObject = {};
supporttedMethods.forEach((method: TSupporttedMethods) => {
  $http[method] = async (url: URL['href'], opts?: Partial<IOptions>) => {
    const { host = config['open-service'][env], data, params, ...rests } = opts || {};
    return umiRequest[method](`${host}/${url.replace(/^\//g, '')}`, {
      data,
      params,
      ...rests,
    });
  };
});

export default $http;
