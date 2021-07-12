import $http, { paramsDiverter } from '../shared/service';
import config, { isCompiled, env, mockHost, redirectMiddleService, OpenServiceHOST } from '../shared/service/constant';
import { TMenuResponse, TResourceResponse, IAuthRequestParams } from './index.type';

const { timeout = 5000 } = config?.[env] || {};

// 获取菜单列表
export const getMenus = (params?: IAuthRequestParams): Promise<TMenuResponse> => {
  const { host } = params || {};
  const DECODE_PHONE_MOCK_URL = `${mockHost}/menus`;
  const logoutURL = isCompiled ? `${host || OpenServiceHOST}/decode/phone_number` : redirectMiddleService;
  const requestUrl = new URL(logoutURL);

  return <Promise<TMenuResponse>>$http.post(requestUrl.pathname, {
    timeout,
    ...paramsDiverter(params || {}, {
      data: { url: `${DECODE_PHONE_MOCK_URL}` },
    }),
    host: host || `https://${requestUrl.host}`,
  });
};

// 获取资源列表
export const getResources = (params?: IAuthRequestParams): Promise<TResourceResponse> => {
  const { host } = params || {};
  const DECODE_PHONE_MOCK_URL = `${mockHost}/resources`;
  const logoutURL = isCompiled ? `${OpenServiceHOST}/decode/phone_number` : redirectMiddleService;
  const requestUrl = new URL(logoutURL);

  return <Promise<TResourceResponse>>$http.post(requestUrl.pathname, {
    timeout,
    ...paramsDiverter(params || {}, {
      data: { url: `${DECODE_PHONE_MOCK_URL}` },
    }),
    host: host || `https://${requestUrl.host}`,
  });
};
