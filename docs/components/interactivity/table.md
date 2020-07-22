# Table

**通过 columns + data，以及其它 api 展示出并且控制`📦表格`数据**

> 允许通过外接属性数据均从模拟接口获取，只为演示功能，不保证数据准确和稳定性。请在控制台中查看。

## 1. 基本使用

<code src="./../../demo/table/normal-usage.demo.tsx"/>

## 2. 带搜索条件

<code src="./../../demo/table/with-search.demo.tsx"/>

## 3. 带额外搜索项

自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：

> - 提供受控属性 value 或其它与 valuePropName 的值同名的属性。
> - 提供 onChange 事件或 trigger 的值同名的事件。
>
> 参考： https://ant.design/components/form-cn/#components-form-demo-customized-form-controls

<code src="./../../demo/table/with-extra-search.demo.tsx"/>

## APIs
