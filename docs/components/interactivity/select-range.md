# SelectRange 范围选择

**班级.课程等范围选择。**

### 何时使用

**按大小选择一个区间范围，类似时间选择器**

- 当需要选择班级或者课程的范围。
- 当需要模糊筛选下拉项。
- 数据需要先排好序传入

### 基本使用

<code src="./../../demo/select-range/normal-usage.demo.tsx" />

### Apis

| 参数          | 说明                                        | 类型                                             | 默认值     |
| ------------- | ------------------------------------------- | ------------------------------------------------ | ---------- |
| selectOptions | 下拉项数据                                  | [RangeOption](#RangeOption)\[]                   | []         |
| currentValue  | 默认选中的值(相当于 Select 的 defaultValue) | [number\|string, number\|string]                 | []         |
| width         | 一个展示框的宽度，前后选择框宽度一致        | number                                           | `160`      |
| onChange      | 选中变化时触发                              | (value:[number\|string, number\|string]) => void | () => void |

### RangeOption

| 参数 | 说明                   | 类型           | 默认值 |
| ---- | ---------------------- | -------------- | ------ |
| key  | Select 的唯一 value 值 | number\|string | -      |
| name | Select 下拉项的展示值  | number\|string | -      |

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters refered={false} />;
```
