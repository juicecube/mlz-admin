# Form 表单

**`📦 表单`自带数据域管理。包含数据录入、校验以及对应样式。**

### 基本使用

<code src="./../../demo/form/normal-usage.demo.tsx" />

### 自动渲染表单

<code src="./../../demo/form/with-columns.demo.tsx" />

### 自动根据依赖渲染表单

该功能基于双向绑定和脏值检测，即便做了一些优化，使得绝大多数场景下完全可以无视性能开销的增加。但在存在大量依赖关系时，脏值检测+动态更新对性能的影响依旧不能忽视，**所以 relyOn 不宜过长**。对于相互依赖关系极端复杂的表单，建议直接使用 Form/Form.Item 自行封装，甚至原生 form 封装 Form.Item，从底层实现最符合需求的表单。虽然麻烦一点，但能保障 ui 维持一个合理帧数。

<code src="./../../demo/form/with-dependencies.demo.tsx" />

### 初始值

<code src="./../../demo/form/with-initial-data.demo.tsx" />

### APIs

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters />;
```
