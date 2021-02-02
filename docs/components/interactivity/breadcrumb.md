# Breadcrumb 面包屑

> `📦 面包屑`显示当前页面在系统层级结构中的位置，并能向上返回。

## 基本使用

```tsx
/**
 * title: 基本使用
 * desc: 最简单的用法。
 */
import React from 'react';
import { Breadcrumb } from '@mlz/admin';

export default () => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);
```

## 优化内容

暂无

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters />;
```
