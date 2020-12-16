import Http from '../shared/service';

export type DecodedPhoneType = string;

const isCompiled = !'%THIS_WILL_BE_EMPTY_AFTER_DIST%';

export const DECODE_HOST = 'https://dev-open-service.codemao.cn';
export const DECODE_URL = isCompiled ? `${DECODE_HOST}/decode/phone_number` : MOCK_PROXY_HOST;
const DECODE_PHONE_MOCK_URL = 'http://rap2api.taobao.org/app/mock/252468/admini/decode-phone';

export class EncodePhoneModel {
  readonly decodedTel: DecodedPhoneType = '';

  private requestUrl = new URL(DECODE_URL);

  private encodedTel: DecodedPhoneType;

  constructor(encodedTel: DecodedPhoneType) {
    this.encodedTel = encodedTel;
  }

  public decode(): Promise<any> {
    return new Http(this.requestUrl.origin, { timeout: 2000 }).post(
      this.requestUrl.pathname,
      isCompiled
        ? {
            cipher_text: this.encodedTel,
          }
        : {
            url: `${DECODE_PHONE_MOCK_URL}?cipher_text=${this.encodedTel}`,
          },
    );
  }

  static create($encodedTel) {
    return new EncodePhoneModel($encodedTel);
  }
}
