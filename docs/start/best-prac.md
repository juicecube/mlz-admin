# 最佳实践

使用`@mlz-pack`或`yummi`托管项目，比如@mlz/pack：

```shell
npm install @mlz/pack -D
```

它们均内置了针对本组件库的必要配置和优化，并有方便且丰富的编程猫业务开发的底层配置，墙裂推荐安装。

> @mlz/pack：https://github.com/juicecube/mlz-pack
>
> yummi：https://phab.srv.codemao.cn/source/yuumi/

随后安装本组件库：

```shell
npm install @mlz/admin -S
```

---

<Alert>**由于本库对 Antd 的完全兼容性，在实际开发过程中，可以不用再安装 Antd。**</Alert>
