import { decodeEncodedPhone } from './controller';
import { Model } from '../shared/basic-class';

export type DecodedPhoneType = string;
class EncodePhoneModel extends Model {
  readonly decodedTel: DecodedPhoneType = '';

  private encodedTel: DecodedPhoneType;

  constructor(encodedTel: DecodedPhoneType) {
    super();
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
