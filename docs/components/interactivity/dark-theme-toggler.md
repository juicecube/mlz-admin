# DarkThemeToggler 切换深色主题

> `📦 切换深色主题`用于在默认主题和深色主题之间进行样式切换。

## 基本使用

```tsx
/**
 * desc: 点击Switch组件以切换深色主题。
 */
import React, { useState, useEffect } from 'react';
import { DarkThemeToggler, message } from '@mlz/admin';

class App extends React.Component {
  render() {
    return (
      <DarkThemeToggler
        onChange={(e: 'dark' | 'light') => {
          e === 'dark' && message.info(`切换成功。文档无法保证样式正常`);
        }}
      />
    );
  }
}

export default App;
```

## 优化内容

- Antd 自身的组件，并没有实现`动态主题切换`功能（不论 dark/default 切换，还是多彩切换），我们通过比较节能的方式添加了进来.
- 我们在全局注入了 css 变量：`--theme-bg`、`--theme-sub-bg`以及`--theme-menu-bg`，会在主题发生变化时自动切换对应的值，方便`必须设置与主题配套的显性颜色`时使用。如果有过多需求请提 issue。

---

## APIs

### DarkThemeToggler props

| 参数名 | 描述 | 类型 | 默认值 | 更多内容 |
| --- | --- | --- | --- | --- |
| **onChange** | 当 Switch 组件发生值的变化时的回调 | (darkness: [ThemeKeyNameTypes](#themekeynametypes-type))=> void | `undefined` |  |
| **initialTheme** | 初始主题 | 'dark' ｜ 'light' | `light` |  |
| **preload** | 是否开启预热以及开启的时间 | number ｜ undefined | `3000` | dark theme 的 css 文件大小还是比较大的，可以通过预加载来改善真正发生切换时的交互流畅度；单位为 `ms` |
| **darkThemeCssResourceUrl** | 将要加载的深色主题样式资源的地址 | string | `bootcdn.net/**/*.css` |  |

### ThemeKeyNameTypes [type]

| 参数名                | 描述           | 类型值                        | 更多内容                       |
| --------------------- | -------------- | ----------------------------- | ------------------------------ |
| **ThemeKeyNameTypes** | theme 可能的值 | 'dark' ｜ 'light'｜ 'default' | `light`和`default`都是浅色主题 |

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters refered={false} />;
```
