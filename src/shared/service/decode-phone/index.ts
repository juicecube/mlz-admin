import { supporttingTypes } from '../constants';
import { envTransformer } from '..';
import Http from '../$http';

let prefix = envTransformer(process.env.NODE_ENV as supporttingTypes);
prefix = prefix ? `${prefix}-` : '';

export const DECODE_HOST = `https://${prefix}open-service.codemao.cn`;
export const DECODE_URL = `${DECODE_HOST}/decode/phone_number`;
const PROXIER_URL = 'https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect';
const MOCK_URL = `http://rap2api.taobao.org/app/mock/252468/admini/decode-phone`;

const isProduction = process.env.NODE_ENV === 'production';
export default async ($encodedPhone, $url = isProduction ? DECODE_HOST : PROXIER_URL) => {
  const url = new URL($url);
  let res = {};
  res = await new Http(url.origin).post(
    url.pathname,
    isProduction
      ? {
          cipher_text: $encodedPhone,
        }
      : {
          url: MOCK_URL,
        },
  );
  return res;
};
