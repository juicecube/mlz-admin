# ConfigProvider 全局化配置

**为组件提供统一的全局化配置。**

<Alert>**重要**：项目中必须使用`ConfigProvider`组件包裹可视区域的组件，否则无法正确引入样式和编程猫设计规范下的色彩配方。</Alert>

### 基本使用

<code src="./../../demo/config-provider/normal-usage.demo.tsx" />

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters />;
```
