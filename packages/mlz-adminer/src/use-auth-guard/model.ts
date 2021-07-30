import { getMenus, getResources } from './controller';
import { Model } from '../shared/basic-class';
import { TMenuListItem, TResourceListItem } from './index.type';

export default class Auth extends Model {
  static create = () => {
    return new Auth();
  };

  // eslint-disable-next-line class-methods-use-this
  getMenus() {
    return getMenus();
  }

  // eslint-disable-next-line class-methods-use-this
  getResources() {
    return getResources();
  }
}
