# Icon 图标

**通过指定 iconfont 的 html class 类名来显示对应的`📦 图标`**

## 内置 icon 列表

```tsx
/**
 * inline: true
 */
import React from 'react';
import IconClasses from '../_site/icon-classes';

export default () => <IconClasses />;
```

## 基本使用

<code src="./../../demo/icon/normal-usage.demo.tsx"/>

## 在组件中使用

<code src="./../../demo/icon/used-in-others.demo.tsx"/>

## 多个 iconfont 源

<code src="./../../demo/icon/with-more-repo.demo.tsx"/>

## 优化内容

- 连的是编程猫后台管理系统 iconfont 源，如上所示。
- 新增`createIconFontScript`方法，允许同时配置多个链接的 iconfont 源的 icon 资源。

---

## APIs

### Icon props

| 参数名   | 描述                        | 类型   | 默认值 | 更多内容 |
| -------- | --------------------------- | ------ | ------ | -------- |
| **type** | iconfont 的 font class 类值 | string | -      |          |

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters />;
```
