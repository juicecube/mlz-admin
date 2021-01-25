# DatePicker 日期选择框

> `📦 日期选择框`是用来选择日期/时间的控件。

## 基本使用

<code src="./../../demo/date-picker/normal-usage.demo.tsx" />

## 返回时间的起始点

<code src="./../../demo/date-picker/startof-usage.demo.tsx" />

## 优化内容

- antd 的 DatePicker 无法返回选中时间的起始点时间。比如按日搜索，虽然选中的是日期，但是会将非当日 00:00:00 的 unix 时间写入。在某些需求下有问题。
- antd 的 DatePicker 组件返回的是 Moment 对象，我们从诸多项目的实际使用情况来看，认为有必要直接将其在组件层直接转换为 unix 时间戳，方便使用。（这一点在数据查询时尤为突出）

---

## APIs

### DatePicker props

| 参数 | 说明 | 类型 | 默认值 | 更多内容 |
| --- | --- | --- | --- | --- |
| value | 日期 | number(unix time) \| Moment | - |  |
| startOf | 返回时间的阶段起始点 | Moment.unitOfTime.StartOf | `ms` | [Moment.unitOfTime.StartOf](https://github.com/moment/moment/blob/develop/ts3.1-typings/moment.d.ts#L315)；如`d`将返回的是选中时间的当日起始点 00:00:00，`w`将返回当周启始点 |
| onChange | 发生变化时的回调 | (date: number \| moment, dateString: string)=>void | - |  |
| returnUnixValue | 是否直接返回 unix time，而非 Moment 对象 | boolean | `false` | 精确到`mms` |

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters />;
```
