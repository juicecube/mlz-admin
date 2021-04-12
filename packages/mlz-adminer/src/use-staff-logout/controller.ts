import $http, { paramsDiverter } from '../shared/service';
import config, { isCompiled, env, mockHost, redirectMiddleService, OpenServiceHOST } from '../shared/service/constant';
import { useStaffLogoutOptions } from './index.type';

const { timeout = 5000 } = config?.[env] || {};

export const logout = (params?: useStaffLogoutOptions): Promise<any> => {
  const DECODE_PHONE_MOCK_URL = `${mockHost}/logout`;
  const logoutURL = isCompiled ? `${OpenServiceHOST}/decode/phone_number` : redirectMiddleService;
  const requestUrl = new URL(logoutURL);

  return $http.post(requestUrl.pathname, {
    timeout,
    ...paramsDiverter(params || {}, {
      data: { url: `${DECODE_PHONE_MOCK_URL}` },
    }),
    host: `https://${requestUrl.host}`,
  });
};
