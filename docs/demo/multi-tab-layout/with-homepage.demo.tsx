/**
 * title: 带"首页"标签
 * desc: "首页"标签是默认展示项。在没有任何标签页的情况不允许关闭
 */
import React, { useState } from 'react';
import { Layout, Menu, Icon, Button, MultiTabLayoutHelmet } from '@mlz/admin';

const dataSource = [
  {
    component: <div>Tab 1 content</div>,
    closable: false,
    label: 'Tab 1',
    key: 'Tab 1',
  },
  {
    component: <div>Tab 2 content</div>,
    label: 'Tab 2',
    key: 'Tab 2',
  },
  {
    component: <div>Tab 3 content</div>,
    label: 'Tab 3',
    key: 'Tab 3',
  },
  {
    component: <div>Tab 4 content</div>,
    label: 'Tab 4',
    key: 'Tab 4',
  },
];
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default () => {
  const [collapsed, toggleCollapsed] = useState(false);
  const onCollapsedHandler = () => {
    toggleCollapsed(!collapsed);
  };
  return (
    <div style={{ width: '100%', transform: 'translate(0px, 0px)' }}>
      <Layout>
        <Sider collapsed={collapsed} onCollapse={onCollapsedHandler}>
          <div style={{ float: 'left', color: 'white', height: 32, margin: '16px 0', textAlign: 'center', width: '100%' }}>
            <img src="https://static-platform.codemao.cn/logo" width="26" height="26" alt="codemao-logo" />
            {collapsed ? null : <span style={{ padding: '0 8px' }}>Libra投放平台</span>}
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <SubMenu key="sub1" title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: '0 16px' }}>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ float: 'right' }}>
                <a style={{ marginRight: 12 }}>查收通知</a>
                <Button type="primary">退出登陆</Button>
              </div>
            </div>
          </Header>
          <Content style={{ margin: '16px 16px 0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 420, background: 'white' }}>
              <MultiTabLayoutHelmet dataSource={dataSource} hideAdd indexPage={<div>这里是首页了啊</div>} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', zIndex: 1 }}>@mlz/admin &copy; 2020</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
