# Layout 布局

**`📦 布局`进行页面级整体布局。**

## 顶部导航布局

```tsx
/**
 * title: 顶部导航布局
 * desc: 最基本的『上-中-下』布局。网站路由由位于顶部的导航进行主控，没有侧边导航栏。
 */
import React from 'react';
import { Menu, Layout, Button } from '@mlz/admin';

const HeaderContent = () => (
  <div style={{ overflow: 'hidden' }}>
    <div style={{ float: 'left', color: 'white' }}>
      <img src="https://static-platform.codemao.cn/logo" width="26" height="26" />
      <span style={{ padding: '0 16px' }}>Libra投放平台</span>
    </div>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ float: 'left' }}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </div>
);

const { Header, Content, Footer } = Layout;
export default () => (
  <Layout className="layout">
    <Header style={{ overflow: 'hidden' }}>
      <HeaderContent />
    </Header>
    <Content style={{ padding: '18px 50px' }}>
      <div className="site-layout-content" style={{ minHeight: 160 }}>
        View Contents
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>后台管理系统设计规范组件库 &copy; 2020</Footer>
  </Layout>
);
```

## 侧边导航布局

```tsx
/**
 * title: 侧边导航布局
 * desc: 侧边两列式布局，在页面布局上采用的是『左-右』的结构。页面横向空间有限时，侧边导航可收起。
 * transform: true
 */
import React from 'react';
import { Menu, Layout, Button, Icon } from '@mlz/admin';
import { Divider } from 'antd';

const HeaderContent = () => (
  <div style={{ overflow: 'hidden', padding: '0 16px' }}>
    <div style={{ float: 'right' }}>
      <a style={{ marginRight: 12 }}>查收通知</a>
      <Button type="primary">
        <Icon type="close" />
        退出登陆
      </Button>
    </div>
  </div>
);

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class App extends React.PureComponent {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => this.setState({ collapsed });

  render() {
    return (
      <div style={{ width: '100%', transform: 'translate(0px, 0px)' }}>
        <Layout>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div style={{ float: 'left', color: 'white', height: 32, margin: '16px 0', textAlign: 'center', width: '100%' }}>
              <img src="https://static-platform.codemao.cn/logo" width="26" height="26" />
              {this.state.collapsed ? null : <span style={{ padding: '0 8px' }}>Libra投放平台</span>}
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
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <HeaderContent />
              <Divider />
            </Header>
            <Content style={{ margin: '0 16px', minHeight: '130%' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 420 }}>
                View Contents
              </div>
            </Content>
            <Footer style={{ textAlign: 'center', zIndex: 1 }}>后台管理系统设计规范组件库 &copy; 2020</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default App;
```

## 组件概述

- Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。
- Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
- Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。
- Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
- Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters />;
```
