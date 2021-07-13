import { logout } from './controller';
import { Model } from '../shared/basic-class';
import { useStaffLogoutOptions } from './index.type';

class Staff extends Model {
  readonly staff = {};

  // constructor() {
  //   super();
  // }

  // eslint-disable-next-line class-methods-use-this
  lougout(opts?: useStaffLogoutOptions) {
    return logout(opts);
  }

  static create() {
    return new Staff();
  }
}

export default Staff;
