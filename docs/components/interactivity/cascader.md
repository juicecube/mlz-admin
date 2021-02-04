# Cascader 级联选择

> `📦 级联选择`可从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。比起 多个选择器 组件，可以在同一个浮层中完成选择，有较好的体验。

## 适配方案

选项框高度可根据实际需求自定义，一般建议至少 4 个选项的高度，一般按照一级菜单高度决定整个选项框高度，下一级选项溢出时，采用滚动条。

单个选项栏宽度适配为：`文本宽度 + 图标宽度 16px + 文本图标间距 16px`。

## 基本使用

<code src="./../../demo/cascader/normal-usage.demo.tsx" />

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
