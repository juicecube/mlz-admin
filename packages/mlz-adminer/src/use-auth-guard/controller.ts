import $http, { paramsDiverter } from '../shared/service';
import config, { isCompiled, env, mockHost, redirectMiddleService, OpenServiceHOST } from '../shared/service/constant';
import { TMenuResponse, TResourceResponse, IAuthRequestParams } from './index.type';

const { timeout = 5000 } = config?.[env] || {};

// 获取菜单列表
export const getMenus = (params?: IAuthRequestParams): Promise<TMenuResponse> => {
  const { host } = params || {};
  const GET_MENUS_MOCK_URL = `${mockHost}/menus-demo`;
  const getMenusURL = isCompiled ? `${host || OpenServiceHOST}/decode/phone_number` : redirectMiddleService;
  const requestUrl = new URL(getMenusURL);

  return <Promise<TMenuResponse>>$http
    .post(requestUrl.pathname, {
      timeout,
      ...paramsDiverter(params || {}, {
        data: { url: `${GET_MENUS_MOCK_URL}` },
      }),
      host: host || `https://${requestUrl.host}`,
    })
    .then((res: any) => {
      return JSON.parse(res);
    });
};

// 获取资源列表
export const getResources = (params?: IAuthRequestParams): Promise<TResourceResponse> => {
  const { host } = params || {};
  const GET_RESOURCES_MOCK_URL = `${mockHost}/resources-demo`;
  const getResourcesURL = isCompiled ? `${OpenServiceHOST}/decode/phone_number` : redirectMiddleService;
  const requestUrl = new URL(getResourcesURL);

  return <Promise<TResourceResponse>>$http
    .post(requestUrl.pathname, {
      timeout,
      ...paramsDiverter(params || {}, {
        data: { url: `${GET_RESOURCES_MOCK_URL}` },
      }),
      host: host || `https://${requestUrl.host}`,
    })
    .then((res: any) => {
      return JSON.parse(res);
    });
};
