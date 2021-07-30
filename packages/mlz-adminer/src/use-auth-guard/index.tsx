import React, { createContext, useContext, useMemo } from 'react';
import useBasicRequest from '../shared/basic-request-hook';
import { useAuthGuardOptions, TMenuListItem, TResourceListItem, IAuthGuardProps } from './index.type';
import { RouteProps } from 'react-router';
import AuthMenu from './accessories/auth-menu';
import AuthResource from './accessories/auth-resource';
import { default as Auth } from './model';

// typings
type IAuthRequestParams = Omit<useAuthGuardOptions, 'passeds' | 'forbiddens'>;

/**
 * 创建context
 */
export const Context = createContext<{ menus: TMenuListItem[]; resources: TResourceListItem[]; routes: any[] }>({
  menus: [],
  resources: [],
  routes: [],
});

/**
 *
 */
export const reactRouterMaker = (menuCode, opts?: RouteProps): RouteProps => {
  return {
    path: menuCode,
    exact: true,
    strict: true,
    ...opts,
  };
};

//
const newAuth = Auth.create();
const asyncGetAuthInfo = () => Promise.all([newAuth.getMenus(), newAuth.getResources()]);
const useAuthGuard = (options?: useAuthGuardOptions, deps?: any[]) => {
  //
  const { passeds, forbiddens } = options || {};

  //
  const context = useContext(Context);

  // TODO: 因为是全局型hooks，所以尽量使用缓存，在其它页面不要调用
  const { data } = useBasicRequest<IAuthRequestParams, any>(asyncGetAuthInfo, { singleton: true, deps, ...options });
  const [menus, resources] = useMemo(() => {
    if (data) {
      return [data[0]?.menus, data[1]?.resources];
    }
    return [[], []];
  }, [data]);

  /**
   * 需求：
   * 1.根据menus分配前端动态路由，没有的不允许访问。
   * 2.根据resources对应的resource_url，在status为YES的情况下，也要成为生成路由的素材。
   * 3.根据passeds将一些权限完全
   */
  const routes = useMemo(() => {
    return [
      ...menus?.map(($m) => $m.menu_code),
      ...resources?.map(($r) => {
        if (['YES', 1, true].includes($r.status)) {
          return $r.resource_url;
        } else {
          return undefined;
        }
      }),
    ]
      .concat(passeds)
      .filter((item) => {
        return item && !forbiddens?.some((r) => r.path === item.path);
      })
      .map((item) => reactRouterMaker(item));
  }, [menus, resources, passeds, forbiddens]);

  // REMARK: resources是一个weakMap结构的数据，而非object/array
  const resourceMap = new Map();
  resources.forEach((item: TResourceListItem) => {
    resourceMap.set(item.resource_code, item);
  });

  const AuthGuardRender = useMemo(() => {
    const contextPayload = {
      menus,
      resourceMap,
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
  }, [menus, resources, routes]);

  return { menus, resourceMap, routes, AuthGuardRender, _Context: Context };
};

export { AuthMenu, AuthResource };
export default useAuthGuard;
