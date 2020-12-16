import Http from '../shared/service';

export type DecodedPhoneType = string;
export const DECODE_HOST = 'https://dev-open-service.codemao.cn';
export const DECODE_URL = `${DECODE_HOST}/decode/phone_number`;
export class EncodePhoneModel {
  readonly decodedTel: DecodedPhoneType = '';

  private requestUrl = new URL(DECODE_URL);

  private encodedTel: DecodedPhoneType;

  constructor(encodedTel: DecodedPhoneType) {
    this.encodedTel = encodedTel;
  }

  public fetch(): Promise<any> {
    return new Http(this.requestUrl.origin, { timeout: 2000 }).post(this.requestUrl.pathname, {
      cipher_text: this.encodedTel,
    });
  }
}
