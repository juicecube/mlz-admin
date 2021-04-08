import $http, { paramsDiverter } from '../shared/service';
import config, { isCompiled, env, mockHost, redirectMiddleService } from '../shared/service/constant';

const OpenServiceHOST = config[env]?.['host']?.['open-service'];
const { timeout } = config[env];

export const decodeEncodedPhone = (encodedPhone: string, specifiedUrl?: URL['href']): Promise<any> => {
  const DECODE_PHONE_MOCK_URL = `${mockHost}/decode-phone`;
  const DECODE_URL = isCompiled ? `${OpenServiceHOST}/decode/phone_number` : redirectMiddleService;
  const requestUrl = new URL(specifiedUrl || DECODE_URL);

  return $http.post(requestUrl.pathname, {
    timeout,
    ...paramsDiverter(
      {
        params: { cipher_text: encodedPhone },
      },
      {
        data: { url: `${DECODE_PHONE_MOCK_URL}?cipher_text=${encodedPhone}` },
      },
    ),
    host: `https://${requestUrl.host}`,
  });
};
