import { envTransformer, supporttingTypes } from '../constants';
import { message } from 'antd';
import Http from '..';

let prefix = envTransformer(process.env.NODE_ENV as supporttingTypes);
prefix = prefix ? `${prefix}-` : '';

export const DECODE_HOST = `https://${prefix}open-service.codemao.cn`;
export const DECODE_URL = `${DECODE_HOST}/decode/phone_number`;
const PROXIER_URL = 'https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect';
const MOCK_URL = `http://rap2api.taobao.org/app/mock/252468/admini/decode-phone`;

const isProduction = process.env.NODE_ENV === 'production';
export class Tel {
  encodedPhone = '';

  private decodedPhone = undefined;

  constructor($encodedPhone) {
    this.encodedPhone = $encodedPhone;
  }

  private save($decodePhone) {
    this.decodedPhone = $decodePhone;
  }

  decodePhone = async ($bark = false) => {
    const url = new URL(isProduction ? DECODE_HOST : PROXIER_URL);
    try {
      let res = {};
      res = await new Http(url.origin).post(
        url.pathname,
        isProduction
          ? {
              cipher_text: this.encodedPhone,
            }
          : {
              url: MOCK_URL,
            },
      );
      const result = isProduction ? res : JSON.parse(res).phone_number;
      result && this.save(result);
    } catch (err) {
      $bark && message.error('network error', err);
    }
  };

  protected clear() {
    this.decodedPhone = undefined;
  }

  hasDecoded() {
    return this.decodedPhone !== '';
  }

  toString() {
    return this.decodedPhone;
  }
}
