# Watermark 水印

** `📦 水印`用于为指定组件添加水印背景图片，保护数据权限。**

## 基本使用

```tsx
/**
 * title: 基本使用
 * desc: 通过`text`字段为水印添加文字底板
 */
import React from 'react';
import { Watermark, Space } from '@mlz/admin';

export default () => (
  <Watermark text="版权所有©️milobluebell">
    <div style={{ width: '100%', height: 240 }}>哦呵？</div>
  </Watermark>
);
```
