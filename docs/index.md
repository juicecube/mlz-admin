---
title: 介绍
toc: 'menu'
group:
  title: 介绍
  path: /
  order: 1
---

# @mlz/admin

🌈 @mlz/admin 是遵循编程猫后台管理系统设计规范的 React 组件库。基于[Antd](https://ant.design/index-cn)封装。

![codecov](https://codecov.io/gh/juicecube/mlz-admin/branch/master/graph/badge.svg?token=ZNPL3AMQ7Z) ![Codacy](https://app.codacy.com/project/badge/Grade/999d89d9099e41ef81b9af94c98a8726) ![Action Checkers](https://github.com/juicecube/mlz-admin/workflows/checker/badge.svg) ![Npm Version](https://img.shields.io/npm/v/@mlz/admin?color=42b983&label=%40mlz%2Fadmin&logo=42b983&logoColor=42b983)

---

## 安装使用

```shell
$ npm install @mlz/admin --save
```

---

## 最佳实践

**一、使用`@mlz-pack`或`yummi`托管项目，比如@mlz/pack：**

```shell
npm install @mlz/pack -D
```

它们内置了针对必要的配置和优化，有方便且丰富的编程猫业务开发的底层配置，是我们的推荐方式。如果您是猫厂人员，不出意外这是强制的。

> @mlz/pack：https://github.com/juicecube/mlz-pack
>
> yummi：https://phab.srv.codemao.cn/source/yuumi/

**二、使用 webpack**

与 Ant design 的使用和配置（包括 `babel-import-plugin` 按需导入）方式完全一致。

---

<Alert>**由于本库对 Antd 的完全兼容性，在实际开发过程中，可以完全替代 Antd。**</Alert>

```json
  // package.json
  "dependencies": {
-    "antd": "latest",
+    "@mlz/admin": "latest",
  }
```

---

## 兼容性

兼容全部`Antd^4.1.5`的组件和 API，在实际开发中可作为 Antd 的替代库。此外，加入一些编程猫所需的业务组件和更多 API。

> ps1. 本文档文案和展示均面向编程猫设计规范。所以没有出现在本文档的并不代表没有，记住是**完全兼容**的。
>
> ps2. 新加的组件、功能和 api，一定会展示在每个组件的 APIs 段落

---

## 贡献指南

欢迎贡献代码，但请先参阅：https://github.com/juicecube/mlz-admin/blob/master/CONTRIBUTING.md

也可以加入我们的钉钉群，与我们分享你的想法和建议：

<img src="https://raw.githubusercontent.com/milobluebell/imgs-repo/master/WechatIMG9.jpeg" width="346" alt="Dingtalk Qrcode"/>

---

##### ❤️ 如果你也喜欢本项目，请为我们点一颗星：[Github](https://github.com/juicecube/mlz-admin)
