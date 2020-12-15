import Http from '../$http';
import * as Index from '../../..';

const { NODE_ENV } = process.env;

const seceneAlias = Index.EScences?.[NODE_ENV as Index.SupportedEnvTypes];
const prefix = seceneAlias ? `${seceneAlias}-` : '';

export const DECODE_HOST = `https://${prefix}open-service.codemao.cn`;
export const DECODE_URL = `${DECODE_HOST}/decode/phone_number`;
const PROXIER_URL = 'https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect';
const MOCK_URL = `http://rap2api.taobao.org/app/mock/252468/admini/decode-phone`;

const isProduction = process.env.NODE_ENV === 'production';
export default ($encodedPhone, $url = isProduction ? DECODE_HOST : PROXIER_URL): Promise<any> => {
  const url = new URL($url);
  return new Http(url.origin).post(
    url.pathname,
    isProduction
      ? {
          cipher_text: $encodedPhone,
        }
      : {
          url: MOCK_URL,
        },
  );
};
