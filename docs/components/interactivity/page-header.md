# PageHeader 页头

> `📦 页头` 可用于声明页面主题、展示用户所关注的页面重要信息，以及承载与当前页相关的操作项（包含页面级操作，页面间导航等）

## 基本使用

```tsx
/**
 * title: 基本使用
 */

import React from 'react';
import { PageHeader } from 'antd';

export default () => <PageHeader className="site-page-header" onBack={() => null} title="Title" subTitle="This is a subtitle" />;
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
