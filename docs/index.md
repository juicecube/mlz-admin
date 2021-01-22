---
title: 介绍
toc: 'menu'
group:
  title: 介绍
  path: /
  order: 1
---

# @mlz/admin

###### 🌈 @mlz/admin 是遵循`编程猫后台管理系统设计规范`的开源 React 组件库，基于 Ant Design 进行封装。

[![npm version](https://img.shields.io/npm/v/@mlz/admin?color=42b983&label=%40mlz%2Fadmin&logo=42b983&logoColor=42b983)](https://github.com/juicecube/mlz-admin) [![codecov](https://codecov.io/gh/juicecube/mlz-admin/branch/master/graph/badge.svg?token=ZNPL3AMQ7Z)](https://app.codecov.io/gh/juicecube/mlz-admin/) [![codacy](https://app.codacy.com/project/badge/Grade/4fe6e8e25e00469d8973f63320fa77c0)](https://app.codacy.com/gh/juicecube/mlz-admin/dashboard) [![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/juicecube/mlz-admin/blob/master/CONTRIBUTING.md) [![static](https://img.shields.io/npm/dy/@mlz/admin)](https://www.npmjs.com/package/@mlz/admin)

---

## 安装使用

```shell
$ npm install @mlz/admin --save
```

## 推荐实践

#### 一、使用 `@mlz/pack`

```shell
npm install @mlz/pack -D
```

它内置了普适性的配置和优化，有方便且丰富的编程猫业务开发的底层配置。当然，支持自定义 webpack 全部配置。如果你是编程猫的开发人员，这将是必须使用的。

> @mlz/pack：[@mlz/pack 文档](https://github.com/juicecube/mlz-pack)
>
> 或直接使用搭载@mlz/pack 的 CLI 软件 - yummi：[yummi 文档](https://phab.srv.codemao.cn/source/yuumi/)

#### 二、使用 `webpack`

<Alert>**由于本库对 Antd 的 API 容性，在实际开发过程中，强烈建议完全替代 Antd。**</Alert>

```json
  // package.json
  "dependencies": {
-    "antd": "latest",
+    "@mlz/admin": "latest",
  }
```

我们不可能永远手写组件的 esm 模式引入来完成按需加载。与 Ant design 的使用和配置相似，我们需要配置`babel`如下：

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@mlz/admin',
        libraryDirectory: 'es',
        // 这里略有不同
        style: false,
      },
      '@mlz/admin',
    ],
  ],
};
```

---

## 兼容性

兼容全部`antd^4.1.5`的组件和 API（因此 antd 3.x 下构建的产品不是本组件库的适用对象），在实际开发中可作为 Antd 的`替代库`。此外，加入一些业务组件和更多 API。

> ps1. 本文档 **面向"编程猫设计规范" + 需求差异** 而编写。所以没有出现在本文档的 antd 功能，一样是受支持的。请记住是**API 兼容**的。
>
> ps2. 新加的组件、每个组件的新功能/新 API 和优化内容甚至使用建议，原则上一定会体现在每个组件的 【APIs 】或【额外说明】段落。

---

## 贡献指南

[![closed issues](https://img.shields.io/github/issues-closed-raw/juicecube/mlz-admin?color=3cc23d&label=issue%20closed)](https://github.com/juicecube/mlz-admin/issues?q=is%3Aissue+is%3Aclosed) - [![issues](https://img.shields.io/github/issues/juicecube/mlz-admin?color=orange&label=issues)](https://github.com/juicecube/mlz-admin/issues)

```tsx
/**
 * inline: true
 */
import React from 'react';
import CommunitalCommitsCalculator from './components/_site/communital-commits-calculator';
export default () => <CommunitalCommitsCalculator />;
```

欢迎贡献代码！请先浏览：[《贡献指南 CONTRIBUTING.md》](https://github.com/juicecube/mlz-admin/blob/master/CONTRIBUTING.md)

加入我们的钉钉群，与我们分享你的想法和建议：

<img src="https://raw.githubusercontent.com/milobluebell/imgs-repo/master/WechatIMG9.jpeg" width="356" alt="Dingtalk Qrcode"/>

---

##### ❤️ 如果你也喜欢本项目，请为我们点一颗星：[Github](https://github.com/juicecube/mlz-admin)
