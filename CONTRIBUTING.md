# 贡献指南

"贡献指南"作为开发本库的程序编码和工作开展的契约，要求编程猫官方人员必须遵守全部细则，外部人员应当遵守其中部分细则。

## 🎯 Issue

@mlz/admin 通过 issue 对`需求`和`缺陷`进行管理，它们的分别释义如下：

### 需求

通过 issue.`功能添加` 对 **需求** 进行创建。你可以通过 github 的 Issue 面板直接创建需求。请**务必**按照 feature 模版填写。

### 缺陷

通过 issue.`Bug 反馈` 对 **缺陷** 进行创建和管理。创建方法同上，请**务必**按照 bug 模版填写。

## 🤝 协作方式

@mlz/admin 采用开源项目的管理方式，请您将项目 fork 到**自身目录**下进行 coding。代码编写完成之后，提交到 remote origin 的对应 branch，**而非 upstream**。**在确定自身代码无误，且 checkers 全部运行成功后**，从**自身目录 remote origin**发起 pull request 到 juicecube/mlz-admin 的对应**sprint** 或 **feature** 分支。整个流程如下 👇：

![create PR](https://raw.githubusercontent.com/milobluebell/imgs-repo/master/WX20201105-1130223.png)

> 除上述文档中契约之外，额外要求：
>
> 1. 所有代码必须通过部署在对应分支 push 触发的 checkers 检测成功后，再发起向 Pull Request。以减少不必要的 PR 和 code review。
> 2. **PR 表单请如实认真填写**。
> 3. 非编程猫官方的人员维护此库时只须遵循 antd 的贡献指南： [《ant-design 新特性提交规范》](https://github.com/ant-design/ant-design/wiki/PR-%E8%A7%84%E8%8C%83#ant-design-%E6%96%B0%E7%89%B9%E6%80%A7%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83)

## 🐢 依赖管理

为了避免一些意外的 bug 影响你的开发进度和体验，请尽量使用`npm`进行依赖管理[Dumi Issue#117 bug: 包冲突](https://github.com/umijs/dumi/issues/117)

开发前初始化项目：

```shell
$ npm run reset
```

## 🏭 workflow 管理

#### git flow： @mlz/admin 要求采用编程猫现有的 git flow 管理规范对 GIT.Flow 进行管理：[《编程猫前端 Git Flow》](https://shimo.im/docs/aBAYV4XJdXfn8d3j)

###

## 🏅 需求分配和领取

1. 需求创建请参照本节第一部分。
2. 需求分配本着`自愿领取为原则`，建议`需求交换解决，协助他人完成需求`。
3. 当长时间无人认领时，`应由 @Fukiii 或 @milobluebell 酌情分配`。优先程度上，优先分配至相关业务的开发人员。
4. 对于公共组件`mlz-admin`部分，因开源协作背景，任何编程猫外部人员都可以提交代码，不对他们进行任何指派和限制。

## 📁 文件命名规范

为能够使用`babel-import-plugin`按需引入组件，我们规定：

1. 组件命名必须使用**小写字母**，比如 Icon 组件，应该定位在 **src/icon/index.tsx**中，而不是 src/Icon/xxx.tsx 或其他神马。
2. 分词命名以**链接符**隔开（原则上是，但个别组件有意外，比如 popconfirm，它在 antd 没有被链接符命名），既不是大小驼峰，更不是 snake 命名。比如 DatePicker 组件，应该定位在 src/**date-picker**/index.tsx 而不是 src/datePicker/index.tsx。
3. 组件使用 default export ，且由 **index.tsx** 承担。比如 Button 组件，应该定位在 src/button/**index.tsx**而不是 src/button/button.tsx。

## 🤵 CSS 原则

1. 我们沿用 antd 的技术方案，用且只用`.less`为组件编写动/静态样式。
2. 扩展的样式，css 命名规范按照`BEM命名规范`进行。"词根"默认为**admini**
   > - `规范`可参照：[腾讯 CSS BEM 书写规范](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)
   >
   > - `代码`可参照**CommonTable**组件中的代码

## ⚛️ 组件和 API 设计原则

1. 尽量减少一个功能所需要的新增的 api，尽可能的低耦合高内聚。
2. **严禁修改和覆盖 antd 的 api 和样式外的配套功能，允许扩展，但必须十分谨慎**。
3. type 类型定义尽量和业务代码分开，不要放在同一个文件，即使 types 很少。
4. api 命名尽量使用最贴合的英文单词、与 antd api 差距尽可能小，且尽量简短（举例释义：比如 antd.Table 使用 render 来渲染 column，我们封装对应搜索栏的自定义渲染组件，就不应该叫 searchComponent，而是 searchRender，用户只需辨别是否带有 search），降低使用者认知和记忆成本。
5. 而内部函数或变量，应该在满足贴合语义的情况下，尽量增加长度以精确地表达其含义（举例释义：比如 keyTransformer 当一个页面出现 key 关键词超过 2 次或 key 的别名时就极难 review，正确叫法应如 indexNamedKeyByBackendTransformer 或 keyUniquedInTableTransformer）。
6. 方法、属性或函数参数超过 3 个应该折叠为对象，而不是向后堆积。同类功能的 api 也应该折叠为对象进行统一放置，而不是散得到处都是（举例释义：分页器需要的参数，不应该分为 4 个 prop 传入某组件，而是应该以 pagination: {current, pageSize, ...} 的方式统一放置）

## 🍎 禁忌

1. 恶意使用 `any`。
2. `命名`不符合编程猫前端开发规范(规范包括但不限于上文提到的`分支规范`、`文件命名`和`变量命名`规范)。
3. 携带`外网可触达`的`敏感信息`或`编程猫业务信息`的代码。
4. 使用不安全的脚本代码。
5. 严禁修改开源协议。

## 🔬 测试

1. 测试覆盖率，原则上不低于 85%，其他限制请参照 package.json 文件。
2. 提交 PR 前，须保证 npm run test 可以正常通过，并且预设的其它 checkers 钩子执行通过。

## 📖 文档

1. 要求对组件扩展出来的 api 有明确的展示说明和详尽使用方法。
2. 每个组件下的 APIs 节，只要求写多出于 antd 的，原生的不用复制一遍，原生 api 尽量引导用户去看 antd 的文档。

---

## 😊 开发最佳实践

#### 1. 情况 1⃣️：没有实际的业务需求。 则`直接项目内开发`👇

> 这种情况一般指，单纯地完成@mlz/admin 的已有 issue.Feature，那么直接运行`npm start`在 demo 页进行开发即可

#### 2. 情况 2⃣️：编写业务需求中的后台系统的组件。 则`通过npm link开发` 👇

> 为项目`projA`开发复用组件。
>
> 1.  先在项目中安装 mytils（因为@mlz/admin 平行依赖 mytils）

```shell
$ npm install mytils
```

> 2.  进入@mlz/admin 项目，开始编写组件代码。完成后，运行

```shell
$ npm dist
$
$ npm link
```

> 3.  进入`projA`项目，运行

```shell
$ npm link @mlz/admin
```

然后引用@mlz/admin，查看编码结果：

```jsx
import { Button } from '@mlz/admin'; // cjs引用
//or
import Button from '@mlz/admin/es/button'; // esm按需引用
```

之后你直接修改@mlz/admin 中的代码，并且重新执行 dist（不建议直接引用 src），在 projA 刷新就可以实时看到变化。

> 由于我们推荐使用 FC 组件，所以可能会出现如下报错：
>
> **Error: Invalid hook call. Hooks can only be called inside of the body of a function component**
>
> 可能是因为：
>
> 1.  https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react
>
> 或者
>
> 2.  https://github.com/facebook/react/issues/13991
> 3.  https://github.com/webpack/webpack/issues/8607#issuecomment-453068938
>
>     如果以上三种情况无法解决，则可能是由于 React 自身 bug 导致。参考 👉https://github.com/facebook/react/issues/13991#issuecomment-435135293 ，那么就必须使用第三种开发方式 👇

#### 3. 情况 3⃣️：使用 npm link 开发组件时遇到困难。 则`通过npm dist + pack开发`

即先按照`情况1⃣️`进行开发，每次调试时，需要先运行`npm run dist`打包出至少 esm/lib 两种模式 pkg，然后再运行`npm pack`，这个时候项目根目录会多处一个 `.tgz` 文件，将该文件拖拽到 projA，然后在 projA 的终端安装它，比如：

```shell
$ npm install ./mlz-admin-0.0.9.tgz
```

之后使用即可：

```jsx
import { Button } from '@mlz/admin';

// or

import Button from '@mlz/admin/es/button';
```
