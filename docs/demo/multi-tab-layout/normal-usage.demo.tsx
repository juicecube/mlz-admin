/**
 * title: 基础使用
 * desc: 在基础布局中使用多标签页组件<MultiTabLayoutHelmet />，通过dataSource展示多标签的内容。
 * transform: true
 */
import React, { useState } from 'react';
import { Layout, Menu, Button, MultiTabLayoutHelmet } from '@mlz/admin';

const dataSource = new Array(10).fill(1).map((_, index) => {
  return {
    component: <div>Tab {index + 1} content</div>,
    closable: false,
    label: `Tab ${index + 1}`,
    key: `Tab ${index + 1}`,
  };
});

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
            <img
              src="https://cmm-1252070958.cos.ap-guangzhou.myqcloud.com/logo?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDYRYpuprEH0s7sNYThKoQWCqnfREhQiKS%26q-sign-time%3D1612511088%3B1612514748%26q-key-time%3D1612511088%3B1612514748%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D045e31931acedf59df62f138a73957eee9102a32&x-cos-security-token=431458c7091e79151e3615c17f3a777810b233e910001"
              width="26"
              height="26"
              alt="codemao-logo"
            />
            {collapsed ? null : <span style={{ padding: '0 8px' }}>Football Manager</span>}
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
              <MultiTabLayoutHelmet dataSource={dataSource} hideAdd />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', zIndex: 1 }}>@mlz/admin &copy; 2020</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
