# PageHeader

**`📦页头`可用于声明页面主题、展示用户所关注的页面重要信息，以及承载与当前页相关的操作项（包含页面级操作，页面间导航等）。当需要使用户快速理解当前页是什么以及方便用户使用页面功能时使用，通常也可被用作页面间导航。**

#### PageHeader

```tsx
/**
 * title: 标准样式
 * desc: 标准页头，适合使用在需要简单描述的场景。
 */
import React from 'react';
import PageHeader from '@/PageHeader/PageHeader';

export default () => <PageHeader className="site-page-header" onBack={() => null} title="Title" subTitle="This is a subtitle" />;
```
