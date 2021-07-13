import { getMenus, getResources } from './controller';
import { TMenuListItem, TResourceListItem } from './index.type';

export default class Auth {
  readonly menus: TMenuListItem[] = [];

  readonly resources: TResourceListItem[] = [];

  static create = () => {
    return new Auth();
  };

  getMenus = async () => {
    const menus = await getMenus();
    return menus;
  };

  getResources = async () => {
    const resources = await getResources();
    return resources;
  };

  genRouters = () => {};
}
