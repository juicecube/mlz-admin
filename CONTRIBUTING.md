# 🤝 贡献指南

## Issue

@mlz/admin 通过 issue 对`需求`和`缺陷`进行管理，它们的分别释义如下：

### 需求

通过 issue.'功能添加' 对**需求**进行创建。你可以通过 github 的 Issue 面板直接创建需求。请**务必**按照 feature 模版填写必填或选填项

### 缺陷

通过 issue.'Bug 反馈' 对**缺陷**进行创建和管理。创建方法同上，请**务必**按照 feature 模版填写必填或选填项

## 协作方式

@mlz/admin 采用开源项目的管理方式，请您将项目 fork 到**自身目录**下进行 coding。代码编写完成之后，提交到 remote origin 的对应 branch，**而非 upstream**。之后从**自身目录 remote origin**发起 pull request 到 juicecube/mlz-admin 的对应 sprint 或 feature 分支，创建时的界面应如下图 👇：

![create PR](https://raw.githubusercontent.com/milobluebell/imgs-repo/master/WX20200709-182741.png)

## 工作流管理

@mlz/admin 要求采用编程猫现有的 git flow 管理规范对 GIT.Flow 进行管理：[《编程猫前端 Git Flow》](https://shimo.im/docs/aBAYV4XJdXfn8d3j)

> 除上述文档中契约之外，额外要求：
>
> 1. 保证 CI 等各类 checkers 必须通过。
> 2. 必须配有覆盖率不低于 **85%** 的自测用例。
> 3. 需要得到至少另一个维护者的 review 才能合并 pr。
> 4. 非编程猫官方的人员维护此库时只须遵循 antd 的贡献指南： [《ant-design 新特性提交规范》](https://github.com/ant-design/ant-design/wiki/PR-%E8%A7%84%E8%8C%83#ant-design-%E6%96%B0%E7%89%B9%E6%80%A7%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83)

## 需求分配和领取 ☀️

1. 需求创建请参照本节第一部分。
2. 需求分配本着自愿领取为原则。
3. 当无人认领时，由架构组王福凯或王玉分配。优先分配给由相关业务的开发人员完成。

## CSS 原则

1. 我们沿用 antd/dumi，使用`less`为组件编写样式。
2. 扩展的样式，css 命名规范按照`BEM命名规范`进行。"词根"为**admini**(⚠️IMPORTANT)。
   > - `规范`可参照：[腾讯 CSS BEM 书写规范](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)，
   >
   > - `代码`可参照**CommonTable**组件中的代码

## 禁忌 🍄

1. type 类型定义大量使用`any`或者恶意`any`
2. (TODO)

## 组件设计原则

1. 尽量减少一个功能的所需要的新增的 api。
2. 严禁覆盖 antd 原生 api，谨慎扩展。
3. 实现一个功能，尽量使用数据自耦。
4. Type 类型定义尽量和业务代码分开，不要放在同一个文件，即使 Types 很少。
