<p align="center">
@mlz/admin，遵循编程猫后台管理系统设计规范的 React 组件库。
</p>
<p align="center" style="font-size: 32px">
🌈 https://mlz-admin.now.sh
</p>
<div align="center">

![codecov](https://codecov.io/gh/milobluebell/mlz-admin/branch/master/graph/badge.svg) ![Codacy Badge](https://app.codacy.com/project/badge/Grade/999d89d9099e41ef81b9af94c98a8726) ![Codacy Badge](https://github.com/juicecube/mlz-admin/workflows/checker/badge.svg) ![Codacy Badge](https://github.com/juicecube/mlz-admin/workflows/npm-pub/badge.svg)

</div>

---

基于 antd 开发。经扩展后，分为两种 api：

1. 完全兼容`antd^4.x` 的部分，请参考：https://ant.design/components/overview-cn
2. 基于实际后台系统业务做了大量深入优化的部分，请参考：https://mlz-admin.now.sh

# 🌈 使用方法

### 1. 安装

```shell
$ npm install @mlz/admin -S
```

### 2. 引用

```jsx
import { Button } from '@mlz/admin';

const App = () => <Button type="primary">❤️❤️❤️</Button>;
```

# 💻 开发

```js
$ npm install

$ npm start
```

默认启动段口为：`8000`。使用浏览器查看http://localhost:8000/

# 贡献指南

本库的开发代码，至少建立但不限于 [《贡献指南》](https://github.com/juicecube/mlz-admin/blob/master/CONTRIBUTING.md) 之上，所以请先仔细阅读。
