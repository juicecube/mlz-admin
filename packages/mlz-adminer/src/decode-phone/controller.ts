import $http, { paramsDiverter } from '../service';
import { isCompiled, env, config } from '../service/constant';
const OpenServiceHOST = config[env]?.['hosts']?.['open-service'];

export const decodeEncodedPhone = (encodedPhone: string, specifiedUrl?: URL['href']): Promise<any> => {
  const DECODE_PHONE_MOCK_URL = 'http://rap2api.taobao.org/app/mock/252468/admini/decode-phone';
  const DECODE_URL = isCompiled ? `${OpenServiceHOST}/decode/phone_number` : 'https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect';
  const requestUrl = new URL(specifiedUrl || DECODE_URL);

  return $http.post(requestUrl.pathname, {
    timeout: 3000,
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
