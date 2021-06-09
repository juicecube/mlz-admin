import config, { isCompiled, env } from './constant';
import { extend, RequestOptionsInit } from 'umi-request';

type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer E)[] ? E : never;
/**
 * 根据环境分配请求参数的分流器
 *
 * 前者返回生产环境，后者是开发环境
 */
export const paramsDiverter = (productionParams: any, devParams: any) => (isCompiled ? productionParams : devParams);

export const supporttedMethods = ['get', 'post', 'put', 'patch', 'delete'] as const;
interface IOptions extends RequestOptionsInit {
  data?: Object;
  params?: Object;
  onFail(failureBody: any): void;
  onOk(successBody: any): void;
  onCancel?(): void;
  host?: URL['href'];
}

const umiRequest = extend({ timeout: 5000, responseType: 'json', credentials: 'include' });
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
    const { host = config[env]?.['hosts']?.['open-service'], data, params, ...rests } = opts || {};
    return umiRequest[method](`${host}/${url.replace(/^\//g, '')}`, {
      data,
      params,
      ...rests,
    });
  };
});

export default $http;
