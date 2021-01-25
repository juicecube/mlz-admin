# Button 按钮

> `📦 按钮`用于开始一个即时操作。标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 基本使用

```tsx
/**
 * title: 按钮类型
 * desc: 按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。
 */
import React from 'react';
import { Button, Space } from '@mlz/admin';

export default () => (
  <Space size={50}>
    <Button type="primary">Primary</Button>
    <Button type="default">Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
    <Button danger type="primary">
      Danger
    </Button>
  </Space>
);
```

## 不可用状态

```tsx
/**
 * title: 不可用状态 disabled
 * desc: 添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 */
import React from 'react';
import { Button, Space } from '@mlz/admin';

export default () => (
  <Space size={50}>
    <Button type="primary" disabled>
      Primary
    </Button>
    <Button type="default" disabled>
      Default
    </Button>
    <Button type="dashed" disabled>
      Dashed
    </Button>
    <Button type="link" disabled>
      Link
    </Button>
    <Button danger type="primary" disabled>
      Danger
    </Button>
  </Space>
);
```

## loading 状态

```tsx
/**
 * title: 加载中状态
 * desc: 添加 loading 属性即可让按钮处于加载状态。
 */
import React from 'react';
import { Button, Icon, Space, Divider } from '@mlz/admin';

class App extends React.PureComponent {
  state = {
    firstDemo: false,
    secondDemo: false,
  };
  triggerLoading = ($which: 'first' | 'second') => {
    this.setState({
      [`${$which}Demo`]: true,
    });
  };
  render() {
    return (
      <Space size={50}>
        <Button type="primary" shape="circle" icon={<Icon type="play_l" />} loading />
        <Button type="primary" icon={<Icon type="play_l" />} loading>
          播放
        </Button>
        <Divider />
        <Button type="primary" shape="circle" icon={<Icon type="play_l" />} loading={this.state.firstDemo} onClick={() => this.triggerLoading('first')} />
        <Button type="primary" icon={<Icon type="play_l" />} loading={this.state.secondDemo} onClick={() => this.triggerLoading('second')}>
          播放
        </Button>
      </Space>
    );
  }
}

export default App;
```

## 图标按钮

```tsx
/**
 * title: 图标按钮
 * desc: 当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。
 */
import React from 'react';
import { Button, Icon, Space, Divider } from '@mlz/admin';

const App = () => {
  return (
    <>
      <Space size={50}>
        <Button type="primary" shape="circle" icon={<Icon type="play_l" />} />
        <Button type="dashed" shape="circle" icon={<Icon type="gutline_success" />} />
        <Button danger type="primary" shape="circle" icon={<Icon type="gutline_error" />} />
      </Space>
      <Divider dashed />
      <Space size={25}>
        <Button type="primary" icon={<Icon type="play_l" />}>
          播放
        </Button>
        <Button type="dashed" icon={<Icon type="gutline_success" />}>
          开启弹幕
        </Button>
        <Button danger icon={<Icon type="gutline_error" />}>
          删除
        </Button>
      </Space>
    </>
  );
};

export default App;
```

## 组合按钮

```tsx
/**
 * title: 按钮组合
 * desc: 可以将多个 Button 放入 Button.Group 的容器中。可以通过两种方式使用`组合按钮`功能，一种是使用Button.Group，另一种是为Button组件传入group属性。
 */
import React from 'react';
import { Icon, Button, Divider, Dropdown, message, Space } from '@mlz/admin';

const group = [
  {
    key: 1,
    text: '菜单1',
    value: '11',
  },
  {
    key: 2,
    text: '菜单2',
    value: '22',
    type: 'default',
  },
  {
    key: 3,
    text: '菜单3',
    value: '33',
  },
];
const App = () => {
  return (
    <>
      <h4>使用Button.Group：</h4>
      <Button.Group>
        <Button type="primary" icon={<Icon type="round_left_g" />}>
          菜单1
        </Button>
        <Button>菜单2</Button>
        <Button type="primary">
          菜单3
          <Icon type="round_right_g" />
        </Button>
      </Button.Group>
      <Divider />
      <h4>使用group属性：</h4>
      <Button
        group={group}
        onClick={(e) => {
          message.success(`菜单${e.value}`);
        }}
        type="primary"></Button>
    </>
  );
};

export default App;
```

## 优化内容

- Button.Group 在 ant design 4.x 之后已被官方移除[issue#21278](https://github.com/ant-design/ant-design/issues/21278)，我们复原了回来。
- Button.Group 模式的使用，不仅局限于`Button.Group`的 jsx 声明式调用，还可以通过 Button 的 group 属性批量渲染基础按钮。

---

## APIs

### Button props

| 类型 Key  | 描述                              | 类型值                         | 更多内容 |
| --------- | --------------------------------- | ------------------------------ | -------- |
| **group** | Button Group 模式时传入的渲染配置 | [GroupType[]](#grouptype-type) |          |

### GroupType [type]

| 类型 Key | 描述 | 类型值 | 更多内容 |
| --- | --- | --- | --- |
| **key** | 唯一 key 值 | string ｜ number |  |
| **text** | 按钮文字 | string |  |
| **value** | 点击时塞入点击事件 e:React.MouseEventHandler 中的 value 值 | unknown |  |
| **type** | 按钮的类型 | 'default' ｜ 'primary'｜ 'ghost' ｜ 'dashed' ｜ 'link' ｜ 'text' | [按钮类型](https://ant.design/components/button-cn/#components-button-demo-basic) |

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters />;
```
