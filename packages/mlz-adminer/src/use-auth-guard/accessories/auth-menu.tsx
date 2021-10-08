import React, { createContext, useContext, useMemo, memo } from 'react';
import { Menu } from 'antd';
import useAuthGuard from '..';
import { IAuthMenuProps, TMenuListItem } from '../index.type';
import { MenuProps, MenuItemProps } from 'antd/lib/menu';
import { foldArray } from '../../shared/utils';

/**
 *
 * @param props
 * @returns
 */
const { SubMenu } = Menu;
interface InnerAuthMenuProps extends MenuProps {
  menus: TMenuListItem[];
  subMenuFlag: string;
  primaryKeyFlag: string;
  itemOptions?: MenuItemProps;
}
const InnerAuthMenu = memo((props: InnerAuthMenuProps) => {
  const { menus, primaryKeyFlag, subMenuFlag, itemOptions, onClick, ...others } = props;
  const foldedMenus = useMemo(() => {
    return foldArray<TMenuListItem>(menus, {
      primaryKey: primaryKeyFlag,
      foldPointFlag: subMenuFlag,
    });
  }, [menus, subMenuFlag]);

  // 根据subMenuFlag group出父子菜单
  return (
    <Menu mode="inline" theme="dark" onClick={onClick} {...others}>
      {foldedMenus.map((menu) => {
        const { children = [] } = menu;
        return !children.length ? (
          <Menu.Item key={menu.menu_code} {...itemOptions}>
            {menu.menu_name}
          </Menu.Item>
        ) : (
          <SubMenu key={menu.menu_code} title={menu.menu_name}>
            {children.map((child) => {
              return (
                <Menu.Item key={child.menu_code} {...itemOptions}>
                  {child.menu_name}
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      })}
    </Menu>
  );
});

/**
 *
 */
const AuthMenu = (props?: IAuthMenuProps) => {
  const { AuthGuardRender } = useAuthGuard();
  return (
    <AuthGuardRender>{(info) => <InnerAuthMenu menus={info.menus} subMenuFlag={props?.subMenuFlag || 'parent_id'} primaryKeyFlag={props?.primaryKeyFlag || 'menu_id'} {...props} />}</AuthGuardRender>
  );
};

export default AuthMenu;
