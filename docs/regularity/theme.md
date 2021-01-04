---
title: 定制主题
order:
group:
  title: 设计规范
  path: /
---

## 静态定制主题

用于`在项目构建时期就决定项目的主题色彩配方`。通常不包含项目运行时的主题切换，主题配方完全由开发侧决定。

由于本库完全兼容 Antd，所以请参阅 Ant Design 的主题定制方式：https://ant.design/docs/react/customize-theme-cn

---

## 动态切换主题

用于`在项目运行时，允许动态切换主题`，该行为的结果通常由用户侧决定。

```tsx
/**
 * transform: true
 * compact: true
 * inline: true
 */
import React, { useState, useEffect } from 'react';
import { Button, message } from '@mlz/admin';

const defaultColorCode = '#1890ff';
const appendScript = (url) => {
  return new Promise((rsl, rej) => {
    const scriptNode = document.createElement('script');
    scriptNode.type = 'text/javascript';
    scriptNode.src = url;
    scriptNode.onload = () => {
      rsl(!!1);
    };
    scriptNode.onerror = () => {
      rej(!!0);
    };
    document.body.appendChild(scriptNode);
  });
};
class App extends React.Component {
  state = {};

  constructor(_) {
    super(_);
    appendScript('https://cdn.bootcdn.net/ajax/libs/less.js/3.13.0/less.min.js');
    this.state = {
      colorCode: defaultColorCode,
      loading: false,
    };
  }

  colorCodeHandler = (e) => {
    const _target = e.target;
    try {
      !this.state.loading &&
        window.less
          .modifyVars({
            '@primary': this.state.colorCode,
            '@primary-color': this.state.colorCode,
            '@link-color': 'black',
            javascriptEnabled: true,
          })
          .then(() => {
            this.setState({
              colorCode: _target.value,
              loading: false,
            });
            message.success(`主题切换成功${_target.value}`);
          });
    } catch (err) {
      console.error(err);
      message.error(`出错了${err.response}`);
      this.setState({
        colorCode: defaultColorCode,
        loading: false,
      });
    }
  };

  componentDidMount() {
    try {
      console.log(window.less, 12);
    } catch (err) {
      message.error(`出错了${err.response}`);
    }
  }

  render() {
    return (
      <>
        <input type="color" style={{ visibility: 'hidden', width: 0, height: 0, padding: 0, margin: 0 }} ref="color-picker" onChange={this.colorCodeHandler} />
        <Button
          type="dashed"
          style={{ padding: 3, width: 128, borderColor: this.state.colorCode }}
          onClick={() => {
            this.refs['color-picker'].click();
          }}>
          <span style={{ width: '100%', height: '100%', background: this.state.colorCode, borderRadius: 3 }} />
        </Button>
      </>
    );
  }
}
export default App;
```

## 切换 light/dark 模式

静态切换的方式依旧参照 [Ant Design#使用暗黑主题和紧凑主题](https://ant.design/docs/react/customize-theme-cn#%E4%BD%BF%E7%94%A8%E6%9A%97%E9%BB%91%E4%B8%BB%E9%A2%98%E5%92%8C%E7%B4%A7%E5%87%91%E4%B8%BB%E9%A2%98)；对于动态切换，@mlz/admin 为此提供了方便的手动切换功能：

```tsx
```
