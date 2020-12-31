import Http from '.';
import { isCompiled, OpenServiceHOST } from './constant';

/**
 * 根据环境分配请求参数的分流器
 */
const paramsDiverter = (productionParams: any, devParams: any) => (isCompiled ? productionParams : devParams);

export const decodeEncodedPhone = (encodedPhone: string, specifiedUrl?: URL['href']): Promise<any> => {
  const DECODE_PHONE_MOCK_URL = 'http://rap2api.taobao.org/app/mock/252468/admini/decode-phone';
  const DECODE_URL = isCompiled ? `${OpenServiceHOST}/decode/phone_number` : 'https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect';
  const requestUrl = new URL(specifiedUrl || DECODE_URL);

  return new Http(requestUrl.origin, { timeout: 2000 }).post(
    requestUrl.pathname,
    paramsDiverter(
      {
        cipher_text: encodedPhone,
      },
      {
        url: `${DECODE_PHONE_MOCK_URL}?cipher_text=${encodedPhone}`,
      },
    ),
  );
};
