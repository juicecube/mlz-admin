import React, { createContext, useContext, useMemo } from 'react';
import useBasicRequest from '../shared/basic-request-hook';
import { useAuthGuardOptions, TMenuListItem, TResourceListItem, IAuthGuardProps } from './index.type';
import AuthMenu from './accessories/auth-menu';
import AuthResource from './accessories/auth-resource';
import { default as Auth } from './model';

/**
 * 创建context
 */
export const Context = createContext<{ menus: TMenuListItem[]; resources: TResourceListItem[]; routes: any[] }>({
  menus: [],
  resources: [],
  routes: [],
});

//
const useAuthGuard = (options?: useAuthGuardOptions, deps?: any[]) => {
  const context = useContext(Context);
  const authInstance = Auth.create();

  const {
    data: menus = [
      { menu_code: '/a/b', order_number: 0, menu_name: '第一个菜单' },
      { menu_code: '/c/d', order_number: 1, menu_name: '第二个菜单' },
    ],
  } = useBasicRequest<useAuthGuardOptions, any>(authInstance.getMenus, { deps, ...options });
  const {
    data: resources = [
      { resource_code: '/a/1', resource_name: '按钮1' },
      { resource_code: '/a/2', resource_name: '按钮2' },
      { resource_code: '/a/3', resource_name: '按钮3' },
    ],
  } = useBasicRequest<useAuthGuardOptions, any>(authInstance.getResources, { deps, ...options });

  /**
   * 需求：
   * 1.根据menus分配前端动态路由，没有的不允许访问。
   * 2.根据resources对应的resource_url，在status为YES的情况下，也要成为生成路由的素材。
   * 3.
   */
  const routes = [
    ...menus.map(($m) => $m.menu_code),
    ...resources.map(($r) => {
      if ($r.status === 'YES') {
        return $r.resource_url;
      } else {
        return undefined;
      }
    }),
  ].filter((rt) => rt);

  const AuthGuard = useMemo(() => {
    const contextPayload = {
      menus,
      resources,
      routes,
    };
    return (props: IAuthGuardProps) => {
      const { children } = props;
      return (
        <>{children(contextPayload)}</>

        // 权限系统目前来看，可以视为一个常量，用于派生
        // 对应的menus或resources，所以不需要context后续更改
        //
        // <Context.Provider value={contextPayload}>
        //   <Context.Consumer>{() => children(contextPayload)}</Context.Consumer>
        // </Context.Provider>
      );
    };
  }, []);

  // REMARK: resources是一个weakMap结构的数据，而非object/array
  const resourceMap = new Map();
  resources.forEach((item: TResourceListItem) => {
    resourceMap.set(item.resource_code, item);
  });

  return { menus, resourceMap, routes, AuthGuard, _Context: Context };
};

export { AuthMenu, AuthResource };
export default useAuthGuard;
