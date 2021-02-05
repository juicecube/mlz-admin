import { decodeEncodedPhone } from './controller';

export type DecodedPhoneType = string;
class EncodePhoneModel {
  readonly decodedTel: DecodedPhoneType = '';

  private encodedTel: DecodedPhoneType;

  constructor(encodedTel: DecodedPhoneType) {
    this.encodedTel = encodedTel;
  }

  public decode() {
    return decodeEncodedPhone(this.encodedTel);
  }

  static create($encodedTel) {
    return new EncodePhoneModel($encodedTel);
  }
}
export default EncodePhoneModel;
