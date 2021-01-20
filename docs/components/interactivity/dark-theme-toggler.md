# DarkThemeToggler 切换深色主题

** `📦 切换深色主题`用于在默认主题和深色主题之间进行样式切换**

## 基本使用

```tsx
/**
 * desc: 可以通过`darkThemeCssResourceUrl`属性修改深色主题样式资源的地址。
 */
import React, { useState, useEffect } from 'react';
import { DarkThemeToggler, message } from '@mlz/admin';

class App extends React.Component {
  render() {
    return (
      <DarkThemeToggler
        onChange={(e: 'dark' | 'light') => {
          e === 'dark' && message.info(`切换成功。文档无法保证样式正常`);
        }}
      />
    );
  }
}

export default App;
```

## 调用 userDarkTheme hooks

```tsx
/**
 * desc: 可以通过`darkThemeCssResourceUrl`属性修改深色主题样式资源的地址。
 */
import React, { useState, useEffect } from 'react';
import { DarkThemeToggler, message } from '@mlz/admin';

class App extends React.Component {
  render() {
    return <>1234</>;
  }
}

export default App;
```
