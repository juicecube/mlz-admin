import { ENV } from '../constants';
import Http from '../$http';

export type supporttingTypes = 'production' | 'development' | 'test' | 'staging' | 'dev';

const { NODE_ENV } = process.env;

let prefix = ENV[NODE_ENV as supporttingTypes];
prefix = prefix ? `${prefix}-` : '';

export const DECODE_HOST = `https://${prefix}open-service.codemao.cn`;
export const DECODE_URL = `${DECODE_HOST}/decode/phone_number`;
const PROXIER_URL = 'https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect';
const MOCK_URL = `http://rap2api.taobao.org/app/mock/252468/admini/decode-phone`;

const isProduction = process.env.NODE_ENV === 'production';
const decodePhoneService = async ($encodedPhone, $url = isProduction ? DECODE_HOST : PROXIER_URL): Promise<any> => {
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
  return isProduction ? res : JSON.parse(res as string)?.phone_number;
};
export default decodePhoneService;
