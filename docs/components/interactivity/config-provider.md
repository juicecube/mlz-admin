# ConfigProvider 全局化配置

> `📦 全局化配置`为组件库提供统一的全局化脚本和样式配置。

<Alert>**⚠️ 重要**：项目中必须使用`ConfigProvider`组件包裹可视区域的组件，否则无法正确引入样式和编程猫设计规范下的色彩配方。</Alert>

## 基本使用

<code src="./../../demo/config-provider/normal-usage.demo.tsx" />

## 优化内容

- 在 window 中写入组件库相关变量`__MLZ_ADMIN_VERSION__`、`__MLZ_ADMIN_RUNTIME_ENV__`和`__MLZ_ADMIN_BUILD_ENV__`，分别表示本组件库当前`使用的构建版本`、`所在的开发环境`和`组件构建的环境的型号`。
- 默认配置中文 locale。

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters />;
```
