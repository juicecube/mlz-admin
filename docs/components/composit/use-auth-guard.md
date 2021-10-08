# useAuthGuard 内部账号权限系统

> `📦 内部账号权限系统`通过请求接口的返回内容动态生成一个项目所需的权限列表和交互资源。（数据来源全部依赖于后端，如果需要和前端 router 对应，应该自己结合 router 配置和 useAuthGuard 的返回内容进行调整）

## 基本使用

```tsx
/**
 * title: 基本使用
 * desc: 通过引入AuthMenu，AuthResource等组件自动渲染对应权限内容
 */
import React from 'react';
import { Menu, Icon, Button } from '@mlz/admin';
import { AuthMenu, AuthResource } from '@mlz/adminer';

export default () => {
  return (
    <div>
      <div>
        <strong>权限菜单</strong>
        <AuthMenu />
      </div>
      <div>
        <strong>交互资源</strong>
        <AuthResource code="/a/1">
          <Button type="primary" style={{ display: 'block' }}>
            展示按钮
          </Button>
        </AuthResource>
        <AuthResource code="/b/1" disabledOrHidden="disabled">
          <Button type="primary" style={{ display: 'block' }}>
            因为没有资源权限因此不可点击的按钮
          </Button>
        </AuthResource>
      </div>
    </div>
  );
};
```

## 手动引入权限信息

```tsx
/**
 * title: 基本使用
 * desc: 手动根据返回的menus和resourceMap控制菜单和控制交互资源的展示
 */
import React from 'react';
import { Menu, Icon, Button } from '@mlz/admin';
import { useAuthGuard } from '@mlz/adminer';

export default () => {
  const { menus, resourceMap } = useAuthGuard();
  return (
    <div>
      <div>
        <strong>权限菜单</strong>
        <Menu mode="inline" defaultSelectedKeys={['1']} theme="dark">
          {menus.map((menu) => {
            return <Menu.Item key={menu.menu_code}>{menu.menu_name}</Menu.Item>;
          })}
        </Menu>
      </div>
      <div style={{ marginTop: 12 }}>
        <strong>交互资源</strong>
        {resourceMap.has('/a/1') ? (
          <Button type="primary" style={{ display: 'block' }}>
            展示按钮
          </Button>
        ) : null}
        {resourceMap.has('/b/1') ? (
          <Button type="primary" style={{ display: 'block' }}>
            因为没有资源权限因此没有展示的按钮
          </Button>
        ) : null}
      </div>
    </div>
  );
};
```
