# Table 表格

**通过 columns + data，以及其它 api 展示出并且控制`📦 表格`数据**

> 允许通过外接属性数据均从模拟接口获取，只为演示功能，不保证数据准确和稳定性。请在控制台中查看。

## 基本使用

<code src="./../../demo/table/normal-usage.demo.tsx"/>

## 带搜索项

<code src="./../../demo/table/with-search.demo.tsx"/>

## 带可收起/展开的搜索项

<code src="./../../demo/table/with-collapsed-search.demo.tsx"/>

## 自定义搜索项

自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：

> - 提供受控属性 value 或其它与 valuePropName 的值同名的属性。
> - 提供 onChange 事件或 trigger 的值同名的事件。
>
> 参考： https://ant.design/components/form-cn/#components-form-demo-customized-form-controls

<code src="./../../demo/table/with-extra-search.demo.tsx"/>

## 工具栏

<code src="./../../demo/table/with-toolbar.demo.tsx"/>

## 操作栏

<code src="./../../demo/table/with-operations.demo.tsx"/>

---

## APIs

### Table props

| 参数名 | 描述 | 类型 | 默认值 | 更多内容 |
| --- | --- | --- | --- | --- |
| **columns** | 表格列的渲染配置 | [ColumnTypes](#columntypes-type) | `[]` |  |
| **onSearch** | 当搜索项发起搜索/重置时触发 | (object) => void | (object) => void |  |
| **onSearchFailed** | 当搜索项发起搜索且搜索失败时触发 | (object) => void | (object) => void |  |
| **onReset** | 当搜索项发起重置时触发 | (initialFormValues) => void | (initialFormValues) => void | 后续将移除，请尽量使用空参 onSearch 实现 |
| **colCount** | 每行展示搜索项的数量 | number | `4` |  |
| **initialSearchValues** | 初始搜索项 | object | `undefined` |  |
| **tools** | 位于右侧的工具栏，用于 table 附加操作，比如新增、上传等 | ReactNode | `[]` |  |
| **operations** | 位于左侧的操作栏，一般用于对 table 的批量操作、操作提示、归纳等 | ReactNode | `[]` |  |
| **searchCollapsedThreshold** | 隐藏过多搜索内容后，剩余的搜索项数量 | number | `undefined` | 为 0 或不设置，则不开启过量隐藏功能 |

---

### ColumnTypes [type]

| 类型 Key | 描述 | 类型 | 默认值 | 更多内容 |
| --- | --- | --- | --- | --- |
| **type** | 选择直接渲染的 table 单元格或搜索项节点类型 | [TypeValueRefers](#typevaluerefers-type) | `normal` |  |
| **primary** | 设置该 column 的 key 是否为 Table 组件的 rowKey | boolean | `undefined` |  |
| **hidden** | 设置是否在 Table 组件中隐藏 | boolean | `undefined` |  |
| **searchable** | 设置是否在 Table 组件中的搜索项中显示 | boolean ｜ number | `undefined` | 当为 number 类型时，从大到小倒序排列 |
| **searchLabel** | 搜索项的 label | string | 该 column.item 的 title |  |
| **searchKey** | 设置该 column 在搜索 form 中的 name（提交表单时的 key） | string | 该 column.item 的 dataIndex |  |
| **searchType** | 设置该 column 在搜索视区的渲染节点类型 | [TypeFormItemRefers](#typeformitemrefers-type) | `normal` |  |
| **searchColSpan** | 搜索项占据的 col span 宽度 | number | `6` |  |
| **searchRender** | 指定该 column 在搜索视区的渲染组件内容 | () => ReactNode | 该 column.item 的 type 的对应组件 | 相当于 Table.columns 的 render，只不过后者负责渲染 Table 视区对应的组件，而 searchRender 渲染的是搜索区 |
| **searchItemProps** | 为该 column 对应在搜索区的 渲染组件设置更多属性 | object | `undefined` |  |

### TypeValueRefers [type]

| 类型 Key            | 描述                            | 类型值                                                                                |
| ------------------- | ------------------------------- | ------------------------------------------------------------------------------------- |
| **TypeValueRefers** | 支持的直接渲染的 Table 节点类型 | 'normal' ｜ 'number' ｜ 'price' ｜ 'date' ｜ 'datetime' ｜ 'enum' ｜ 'tag' ｜ 'ratio' |

### TypeFormItemRefers [type]

| 类型 Key               | 描述                           | 类型值                                                                 |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------- |
| **TypeFormItemRefers** | 支持的直接渲染的搜索项节点类型 | [TypeValueRefers](#tablecolumnstype) ｜ 'dateRange' ｜ 'datetimeRange' |

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters />;
```
