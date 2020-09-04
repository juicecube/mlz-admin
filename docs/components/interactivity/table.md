# Table 表格

**通过 columns + data，以及其它 api 展示出并且控制`📦 表格`数据**

> 允许通过外接属性数据均从模拟接口获取，只为演示功能，不保证数据准确和稳定性。请在控制台中查看。

## 1. 基本使用

<code src="./../../demo/table/normal-usage.demo.tsx"/>

## 2. 搜索

<code src="./../../demo/table/with-search.demo.tsx"/>

## 3. 自定义搜索项

自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：

> - 提供受控属性 value 或其它与 valuePropName 的值同名的属性。
> - 提供 onChange 事件或 trigger 的值同名的事件。
>
> 参考： https://ant.design/components/form-cn/#components-form-demo-customized-form-controls

<code src="./../../demo/table/with-extra-search.demo.tsx"/>

## 4. 工具栏

<code src="./../../demo/table/with-toolbar.demo.tsx"/>

## 5. 操作栏

<code src="./../../demo/table/with-operations.demo.tsx"/>

## 6. keepAlive 数据缓存

由 Table 组件所在页面向其它路由页面的跳转时，比如"查看详情"。这个交互一旦完成，再返回上一页，之前在 Table 中的搜索和分页参数会被清空。但在特定需求下，我们须要做数据缓存，保证之前的搜索条件继续可用。

> 当然你也可以通过外接 ahooks 的 useAntdTable 的“数据缓存”来完成这个操作或实现更多数据的缓存，这自然要求必须是 function component + hooks。参考： https://ahooks.js.org/zh-CN/hooks/table/use-antd-table#%E6%95%B0%E6%8D%AE%E7%BC%93%E5%AD%98

<code src="./../../demo/table/keep-alive.demo.tsx"/>

## APIs
