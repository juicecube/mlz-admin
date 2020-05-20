# Button

** `📦按钮`用于开始一个即时操作。标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。**

## 基本使用

```tsx
/**
 * title: 按钮类型
 * desc: 按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。
 */
import React from 'react';
import Button from '@/Button/Button';
import { Space } from 'antd';

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
import Button from '@/Button/Button';
import { Space } from 'antd';

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
import Button from '@/Button/Button';
import Icon from '@/Icon/Icon';
import { Space, Divider } from 'antd';

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
        <Button type="primary" shape="circle" icon={<Icon type="i-play" />} loading />
        <Button type="primary" icon={<Icon type="i-play" />} loading>
          播放
        </Button>
        <Divider />
        <Button type="primary" shape="circle" icon={<Icon type="i-play" />} loading={this.state.firstDemo} onClick={() => this.triggerLoading('first')} />
        <Button type="primary" icon={<Icon type="i-play" />} loading={this.state.secondDemo} onClick={() => this.triggerLoading('second')}>
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
import Button from '@/Button/Button';
import Icon from '@/Icon/Icon';
import { Space, Divider } from 'antd';

export default () => (
  <>
    <Space size={50}>
      <Button type="primary" shape="circle" icon={<Icon type="i-play" />} />
      <Button type="dashed" shape="circle" icon={<Icon type="i-danmu" />} />
      <Button danger type="primary" shape="circle" icon={<Icon type="i-wrong" />} />
    </Space>
    <Divider />
    <Space size={25}>
      <Button type="primary" icon={<Icon type="i-play" />}>
        播放
      </Button>
      <Button type="dashed" icon={<Icon type="i-danmu" />}>
        开启弹幕
      </Button>
      <Button danger icon={<Icon type="i-wrong" />}>
        删除
      </Button>
    </Space>
  </>
);
```

## 菜单按钮

```tsx
/**
 * title: 菜单按钮
 * desc: 按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到菜单按钮中组合使用。🚗可以通过两种方式使用`菜单按钮`功能，一种是使用Dropdown + Menu实现，另一种是为Button组件传入menu属性。
 */
import React from 'react';
import { Dropdown, Menu, message, Space } from '@/index';
import Icon from '@/Icon/Icon';
import Button from '@/Button/Button';
import { Divider } from 'antd';

const handleMenuClick = () => {
  message.info('哦呵？');
};

const menuComponents = (
  <Menu
    onClick={(e) => {
      message.success(`哦呵？`, e);
    }}>
    <Menu.Item key="1" icon={<Icon type="i-add" />}>
      毛血旺
    </Menu.Item>
    <Menu.Item key="2" icon={<Icon type="i-add" />}>
      水煮鱼
    </Menu.Item>
    <Menu.Item key="3" icon={<Icon type="i-add" />}>
      红烧肉
    </Menu.Item>
  </Menu>
);
const pureMenuList = [
  {
    key: 1,
    text: '毛血旺',
    value: '毛血旺',
    iconType: 'i-add',
  },
  {
    key: 2,
    text: '水煮鱼',
    value: '水煮鱼',
    iconType: 'i-add',
  },
  {
    key: 3,
    text: '红烧肉',
    value: '红烧肉',
    iconType: 'i-add',
  },
];
const App = () => {
  return (
    <>
      <h4>使用Dropdown+Button+Menu组件的方式：</h4>
      <Space size={5}>
        <Button type="primary">主要</Button>
        <Button>次要</Button>
        <Dropdown overlay={menuComponents}>
          <Button>
            减脂 <Icon type="i-add" />
          </Button>
        </Dropdown>
      </Space>
      <Divider />
      <h4>使用menu属性的方式：</h4>
      <Space size={5}>
        <Button type="primary">主要</Button>
        <Button>次要</Button>
        <Button
          menu={pureMenuList}
          onChange={(value) => {
            message.success(`来一份${value}`);
          }}>
          减脂 <Icon type="i-add" />
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
 * desc: 可以将多个 Button 放入 Button.Group 的容器中。通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。🚗可以通过两种方式使用`组合按钮`功能，一种是使用Button.Group，另一种是为Button组件传入group属性。
 */
import React from 'react';
import { Dropdown, Menu, message, Space } from '@/index';
import Icon from '@/Icon/Icon';
import Button from '@/Button/Button';
import { Divider } from 'antd';

const group = [
  {
    key: 1,
    text: '菜单1',
    value: 1,
    leftIconType: 'i-play',
  },
  {
    key: 2,
    text: '菜单2',
    value: 2,
    type: 'default',
  },
  {
    key: 3,
    text: '菜单3',
    value: 3,
    rightIconType: 'i-danmu',
  },
];
const App = () => {
  return (
    <>
      <h4>使用Button.Group组件的方式：</h4>
      <Button.Group>
        <Button type="primary" icon={<Icon type="i-play" />}>
          菜单1
        </Button>
        <Button>菜单2</Button>
        <Button type="primary">
          菜单3
          <Icon type="i-danmu" />
        </Button>
      </Button.Group>
      <Divider />
      <h4>使用group属性的方式：</h4>
      <Button
        group={group}
        onChange={(e) => {
          message.success(`菜单${e}`);
        }}
        type="primary"></Button>
    </>
  );
};

export default App;
```

## APIs
