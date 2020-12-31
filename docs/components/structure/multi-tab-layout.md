# MultiTabLayout 多标签页布局

** `📦 多标签页布局`是一种非常规的布局组织方式。页面通过标签页点击切换展示，而不是页面跳转。通常通过监听路由变化或其它交互打开新的标签。**

## 基本使用

<code src="./../../demo/multi-tab-layout/normal-usage.demo.tsx"/>

## 带"首页"标签

<code src="./../../demo/multi-tab-layout/with-homepage.demo.tsx"/>

## 路由响应

<code src="./../../demo/multi-tab-layout/with-observer.demo.tsx"/>

## APIs

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters refered={false} />;
```
