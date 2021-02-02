# Pagination 分页

> 采用`📦 分页`的形式分隔长列表，每次只加载一个页面。

## 基本使用

```tsx
/**
 * title: 基本使用
 * desc: 基本分页
 */
import React from 'react';
import { Pagination } from '@mlz/admin';

export default () => <Pagination defaultCurrent={1} total={50} />;
```

## 更多页

```tsx
/**
 * title: 更多页
 * desc: 数据总量超过特定值时展示。
 */
import React from 'react';
import { Pagination } from '@mlz/admin';

export default () => <Pagination defaultCurrent={1} total={500} />;
```

## 跳转某页

```tsx
/**
 * title: 跳转某页
 * desc: 快速跳转到某一页。
 */
import React from 'react';
import { Pagination, message } from '@mlz/admin';

export default () => {
  const onChange = (pageNumber) => {
    message.success('当前页数: ' + pageNumber);
  };
  return (
    <>
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      <br />
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
    </>
  );
};
```

## 总数

```tsx
/**
 * title: 总数
 * desc: 展示总共有多少数据。
 */
import React from 'react';
import { Pagination, message } from '@mlz/admin';

export default () => {
  return (
    <>
      <Pagination showTotal={(total) => `Total ${total} items`} total={85} defaultPageSize={20} defaultCurrent={1} />
      <br />
      <Pagination showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} total={85} defaultPageSize={20} defaultCurrent={1} />
    </>
  );
};
```

## 小分页

```tsx
/**
 * title: 小分页
 * desc: 在空间有限的情况下，可以使用简单的小型分页。
 */
import React from 'react';
import { Pagination, message, Divider } from '@mlz/admin';

export default () => (
  <>
    <Pagination size="small" total={50} />
    <Divider />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Divider />
    <Pagination size="small" total={50} />
    <Divider />
    <Pagination size="small" total={50} disabled showSizeChanger showQuickJumper />
  </>
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
