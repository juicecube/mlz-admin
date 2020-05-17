# 开始

[@mlz/admin](https://github.com/juicecube/mlz-admin) 是按照`编程猫设计规范`，基于[Antd](https://ant.design/index-cn) 修订的组件库。旨在提供统一的后台系统设计和交互模型，以及大幅提高开发效率。

## 兼容性

兼容全部`Antd^4.1.5`的组件和 API，在实际开发中可作为 Antd 的替代库。除此之外，加入一些符合编程猫业务逻辑和规范的特有组件和 API。

> ps1. 本文档文案和展示均面向编程猫设计规范。所以没有出现在本文档的并不代表没有，记住是**完全兼容**的。
>
> ps2. 新加的 Apis 均展示在每个组件的 APIs 段落

## 最佳实践方案

使用`@mlz-pack`或`yummi`托管项目：

```shell
npm install @mlz/pack -D
```

mlz-pack 和 yummi 均内置了针对本组件库的必要配置和优化。随后安装本组件库：

```shell
npm install @mlz/admin -S
```

由于本库对 Antd 的完全兼容性，在实际开发过程中，可以不用再安装 Antd。

> @mlz/pack：https://github.com/juicecube/mlz-pack
>
> yummi：https://phab.srv.codemao.cn/source/yuumi/

## 图标库

全部可选值参见：[**icon-全部图标**](/components/icon#3-全部图标)
