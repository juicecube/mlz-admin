# Watermark 水印

**`📦 水印`用于为指定组件添加水印背景图片，声明数据隐私。**

## 基本使用

```tsx
/**
 * title: 基本使用
 * desc: 通过`text`字段为水印添加文字底板
 * transform: true
 * compact: true
 */
import React from 'react';
import { Watermark, Button, Menu, Layout, Icon } from '@mlz/admin';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default () => (
  <Layout>
    <Sider>
      <div style={{ float: 'left', color: 'white', height: 32, margin: '16px 0', textAlign: 'center', width: '100%' }}>
        <img src="https://static-platform.codemao.cn/logo" width="26" height="26" />
        <span style={{ padding: '0 8px' }}>Libra投放平台</span>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<Icon type="user" />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<Icon type="user" />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<Icon type="user" />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<Icon type="user" />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<Icon type="user" />} />
      </Menu>
    </Sider>
    <Watermark text="版权所有©️handsomest-man" loose={2} wrapGap={100}>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div style={{ width: '100%', height: 400, padding: '20px 0 0 20px' }}>在他人不知情的情况下，即使不以盈利为目的，私自盗用他人肖像照片，依旧会被认定为违法行为。</div>
        </Content>
      </Layout>
    </Watermark>
  </Layout>
);
```

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters refered={false} />;
```
