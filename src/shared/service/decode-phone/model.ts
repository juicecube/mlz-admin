import { envTransformer, supporttingTypes } from '../constants';
import Http from '..';

let prefix = envTransformer(process.env.NODE_ENV as supporttingTypes);
prefix = prefix ? `${prefix}-` : '';
export const DECODE_HOST = `https://${prefix}open-service.codemao.cn`;
export const DECODE_URL = `${DECODE_HOST}/decode/phone_number`;
export const MOCKURL = ``;

class Tel {
  decodedPhone = '';

  async decodePhone($encodedTel, $autoSave = true) {
    const url = new URL(DECODE_HOST);
    const tel = await new Http(url.origin, { timeout: 3000 }).post(url.pathname, {
      cipher_text: $encodedTel,
    });
    if ($autoSave) {
      this.save(tel);
    }
    return tel;
  }

  save($decodePhone) {
    this.decodedPhone = $decodePhone;
  }

  clear() {
    this.decodedPhone = '';
  }

  hasDecoded() {
    return this.decodedPhone !== '';
  }
}

export default Tel;
