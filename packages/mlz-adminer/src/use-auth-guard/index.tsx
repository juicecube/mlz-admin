import React, { createContext, useContext } from 'react';
import useBasicRequest from '../shared/basic-request-hook';
import { useAuthGuardOptions, TMenuListItem, TResourceListItem } from './index.type';
import { default as Auth } from './model';

/**
 * 创建context
 */
const Context = createContext<{ menus: TMenuListItem[]; resources: TResourceListItem[]; routes: any[] }>({
  menus: [],
  resources: [],
  routes: [],
});

//
const useAuthGuard = (options?: useAuthGuardOptions, deps?: any[]) => {
  const context = useContext(Context);

  const { data: menus } = useBasicRequest<useAuthGuardOptions, any>(Auth.create().getMenus, { deps, ...options });
  const { data: resources } = useBasicRequest<useAuthGuardOptions, any>(Auth.create().getResources, { deps, ...options });

  /**
   * 需求：
   * 1. 根据menus分配前端动态路由，没有的不允许访问。
   * 2. 根据resources对应的resource_url，在status为YES的情况下，也要成为生成路由的素材。
   * 3.
   */
  const routes = [
    ...menus.map((m) => m.menu_code),
    ...resources.map((r) => {
      if (r.status === 'YES') {
        return r;
      } else {
        return undefined;
      }
    }),
  ].filter((rt) => rt);

  const AuthGuard = (
    <Context.Provider
      value={{
        menus,
        resources,
        routes,
      }}>
      <div className="test">1234</div>
    </Context.Provider>
  );

  return { menus, resources, routes, AuthGuard, _Context: Context };
};
export default useAuthGuard;
