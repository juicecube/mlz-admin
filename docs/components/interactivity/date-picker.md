# DatePicker 日期选择框

**输入或选择日期的控件。**

### 何时使用

**当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。**

### 基本使用

<code src="./../../demo/date-picker/normal-usage.demo.tsx" />

### 返回时间单位的开头

<code src="./../../demo/date-picker/startof-usage.demo.tsx" />

### APIS

| 参数            | 说明                              | 类型                                       | 默认值 | 版本 |
| --------------- | --------------------------------- | ------------------------------------------ | ------ | ---- |
| value           | 日期                              | number(时间戳)                             | -      |      |
| startOf         | 返回时间单位的开头                | unitOfTime.StartOf                         | ms     |      |
| onChange        | 时间发生变化的回调                | function(date: number, dateString: string) | -      |      |
| returnUnixValue | onChange 是否返回 unix 类型的时间 | boolean                                    | false  |      |
