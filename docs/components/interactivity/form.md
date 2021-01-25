# Form 表单

**`📦 表单`自带数据域管理。包含数据录入、校验以及对应样式。**

## 基本使用

<code src="./../../demo/form/normal-usage.demo.tsx" />

## 自动渲染表单

<code src="./../../demo/form/with-columns.demo.tsx" />

## 自动根据依赖渲染表单

该功能基于双向绑定和脏值检测，即便做了一些优化，使得绝大多数场景下完全可以无视性能开销的增加。但在存在大量依赖关系时，脏值检测+动态更新对性能的影响依旧不能忽视，**所以 relyOn 不宜过长**。对于相互依赖关系极端复杂的表单，建议直接使用 Form/Form.Item 自行封装，甚至原生 form 封装 Form.Item，从底层实现最符合需求的表单。虽然麻烦一点，但能保障 ui 维持一个合理帧数。

<code src="./../../demo/form/with-dependencies.demo.tsx" />

## 设置初始值

<code src="./../../demo/form/with-initial-data.demo.tsx" />

## 优化内容

- 新增 Form 的静态方法 Block（即 `Form.Block`组件）。
- Form.Block 通过开放`columns`属性，对 FormItem 进行动态批量地渲染；节约代码量的同时，实现表单的动态配置化。
- 通过`initialValues`为表单注入与`defaultValue`表现相同的初始内容，区别在于后者在 reset 时仅能回复到 default 值，而非空值，这在不少场景下是需要的；其外，initialValues 是全 Form 的维度，以 name 为索引来进行初始化的，高于原子维度，因此应对不太复杂的表单、普适性的需求更从容轻松。配合`columns` 使用，非常便捷（当然可以通过`itemProps`透传 Form.FormItem 的属性，重新实现原子化配置）。

---

## APIs

### Form props

没有变更。

### Form.Block props

| 参数名             | 描述                                          | 类型                                       | 默认值      | 更多内容 |
| ------------------ | --------------------------------------------- | ------------------------------------------ | ----------- | -------- |
| **columns**        | formlist，类似 Table 的 columns，配置数据渲染 | [IFormColumnType](#iformcolumntype-type)[] | `[]`        |          |
| **initialValues**  | 初始值                                        | Object ｜ undefined                        | -           |          |
| **loading**        | 加载中状态                                    | boolean                                    | `undefined` |          |
| **onReset**        | 表单重置时的回调                              | (initValues: Object) => void               | -           |          |
| **resetText**      | 重置按钮的文字描述                            | string                                     | -           |          |
| **confirmText**    | 确认按钮的文字描述                            | string                                     | -           |          |
| **submitterProps** | 重置/确认按钮区域 Row 的属性                  | [RowProps](#rowprops-type)                 | -           |          |

### IFormColumnType [type]

| 参数名     | 描述                | 类型值                     |
| ---------- | ------------------- | -------------------------- |
| **name**   | 表单的值索引 name   | [NamePath](#namepath-type) |
| **label**  | FormItem 的文字描述 | string                     |
| **render** | FormItem 的文字描述 | string                     |

### RowProps [type]

| 参数名       | 描述                                   | 类型值                                                                                       |
| ------------ | -------------------------------------- | -------------------------------------------------------------------------------------------- |
| **RowProps** | 重置/确认按钮区域 Row 的属性的类型定义 | [RowProps](https://github.com/ant-design/ant-design/blob/master/components/grid/row.tsx#L16) |

### NamePath [type]

| 参数名       | 描述                       | 类型值                               |
| ------------ | -------------------------- | ------------------------------------ |
| **NamePath** | 表单的值索引 name 可能的值 | string ｜ number ｜ InternalNamePath |

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters />;
```
