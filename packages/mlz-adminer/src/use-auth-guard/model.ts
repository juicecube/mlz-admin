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
    console.log(menus, 'menus');
  };

  getResources = async () => {
    const resources = await getResources();
    console.log(resources, 'resources');
  };

  genRouters = () => {};
}
