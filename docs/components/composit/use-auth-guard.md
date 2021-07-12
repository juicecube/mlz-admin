# useAuthGuard 内部账号权限系统

> `📦 内部账号权限系统`通过请求接口的返回内容动态生成一个项目所需的权限列表和交互资源。

## 1. 基本使用

```tsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Button, Modal, message, useAuthGuard, AuthMenu } from '@mlz/adminer';

export default () => {
  return <AuthMenu />;
};
```
