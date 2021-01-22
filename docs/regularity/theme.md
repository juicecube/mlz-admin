---
title: 定制主题
order:
group:
  title: 设计规范
  path: /
---

## 静态定制主题

用于`在项目构建时期就决定项目的主题色彩配方`。通常不包含项目运行时的主题切换，主题配方完全由开发侧决定。

由于本库完全兼容 Antd，所以请参阅 Ant Design 的主题定制方式：[Ant Design#定制主题](https://ant.design/docs/react/customize-theme-cn)

---

## 动态切换主题

用于`在项目运行时，允许动态切换主题`，该行为的结果通常由用户侧决定。@mlz/admin 和 Ant Design 本身并不具备本功能，需要使用浏览器动态修改 less 变量的功能来实现，请自行摸索。

## 切换 light/dark 模式

在灯光环境较暗的情况下，我们推荐使用深色模式，以降低色彩饱和度和对比度，保护用户的视力，同时使用户更容易沉浸于业务场景中，拥有更好的用户体验感和留存。静态切换的方式参照 [Ant Design#使用暗黑主题和紧凑主题](https://ant.design/docs/react/customize-theme-cn#%E4%BD%BF%E7%94%A8%E6%9A%97%E9%BB%91%E4%B8%BB%E9%A2%98%E5%92%8C%E7%B4%A7%E5%87%91%E4%B8%BB%E9%A2%98)；有时为提升用户体验，很多产品提供动态切换深色主题的功能，@mlz/admin 为此提供了方便的手动切换功能：

> 动态切换深色主题的线上产品案例可以查看：[猫小秘客服系统](https://secretary-cat.codemao.cn/) - [DEV](https://dev-secretary-cat.codemao.cn/)

更多主题切换按钮的详情，请参见组件：[DarkThemeToggler](/components/interactivity/dark-theme-toggler)

```tsx
/**
 * desc: 可以通过`darkThemeCssResourceUrl`属性修改深色主题样式资源的地址。
 */
import React, { useState, useEffect } from 'react';
import { DarkThemeToggler, message } from '@mlz/admin';

class App extends React.Component {
  render() {
    return (
      <DarkThemeToggler
        onChange={(e: 'dark' | 'light') => {
          e === 'dark' && message.info(`文档无法保证样式正常，在组件中不会出现异常`);
        }}
      />
    );
  }
}

export default App;
```
