# Watermark 水印

** `📦 水印`用于为指定组件添加水印背景图片，声明数据隐私。**

## 基本使用

```tsx
/**
 * title: 基本使用
 * desc: 通过`text`字段为水印添加文字底板
 */
import React from 'react';
import { Watermark, Button } from '@mlz/admin';

export default () => (
  <Watermark text="版权所有©️handsomest-man" loose={2} wrapGap={100}>
    <div style={{ width: '100%', height: 400 }}>在他人不知情的情况下。即使不以盈利为目的，私自盗用他人肖像照片，依旧会被认定为违法行为。</div>
    <Button type="danger">我知道了</Button>
  </Watermark>
);
```
