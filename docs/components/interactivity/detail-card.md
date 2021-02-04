# DetailCard 详情描述

**`📦 详情描述`通常经拼装后用于分块展示，经列表或表格映射到的某些数据详情页。**

## 基本使用

<code src="./../../demo/detail-card/normal-usage.demo.tsx" />

## 展示 Table 表格数据

<code src="./../../demo/detail-card/as-table.demo.tsx" />

## 带快速访问的锚点

<code src="./../../demo/detail-card/with-anchor.demo.tsx" />

## APIs

### DetailCard props

| 参数名 | 描述 | 类型 | 默认值 | 更多内容 |
| --- | --- | --- | --- | --- |
| **columns** | 数据渲染配置，类似 Table 的 column | [IDetailCardColumn](#idetailcardcolumn-type)[] ｜ [IColumnTypes<any>](/components/interactivity/table#columntypes-type)[] | `[]` |  |
| **dataSource** | 数据源 | Object ｜ undefined ｜ null | - |  |
| **displayType** | DetailCard 的展示类型 | 'grid' ｜ 'table' | - | `grid`应为对象；`table`时，会把 dataSource 转为 Array 进行处理 |
| **noDataResult** | 无数据时的展示内容 | React.ReactNode | `null` |  |
| **linkable** | 当前块的标题是否可锚击 | boolean | `false` |  |
| **loading** | loading 状态 | boolean | - |  |
| **descriptionProps** | Description 组件的配置 | DescriptionsProps | - | 用于透传 props 给 Description 组件 |

### IDetailCardColumn [type]

| 参数名          | 描述             | 类型值                                                                  | 更多内容                   |
| --------------- | ---------------- | ----------------------------------------------------------------------- | -------------------------- |
| **dataIndex**   | 数据索引 key     | string                                                                  |                            |
| **title**       | 详情项展示的标题 | string                                                                  |                            |
| **type**        | 详情项的值类型   | [TypeValueRefers](/components/interactivity/table#typevaluerefers-type) |                            |
| **render**      | 渲染的组件内容   | (val: any, row: any, index: number) => React.ReactNode                  |                            |
| **span**        | 占据的栅格数     | string ｜ number                                                        |                            |
| **placeholder** | 空置站位内容     | '--' ｜ '' ｜ null                                                      | `null`表示空值时不展示该项 |

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters refered={false} />;
```
