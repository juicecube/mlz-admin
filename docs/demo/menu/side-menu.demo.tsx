/**
 * title: 侧边导航
 * desc: 垂直菜单，子菜单内嵌在菜单区域。
 */
import React from 'react';
import { Menu, Icon, Button } from '@mlz/admin';

const { SubMenu } = Menu;
class App extends React.PureComponent {
  state = { collapsed: false, darken: true, mode: false };

  toggleCollapsed = () =>
    this.setState({
      collapsed: !this.state.collapsed,
    });

  toggleDarkeness = () =>
    this.setState({
      darken: !this.state.darken,
    });

  toggleMode = () =>
    this.setState({
      mode: !this.state.mode,
    });

  render() {
    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16, marginRight: 16 }}>
          {this.state.collapsed ? '展开' : '收敛'}
        </Button>
        <Button type="primary" onClick={this.toggleDarkeness} style={{ marginBottom: 16, marginRight: 16 }}>
          {this.state.darken ? '浅色主题' : '深色主题'}
        </Button>
        <Button type="primary" onClick={this.toggleMode} style={{ marginBottom: 16 }}>
          {this.state.mode ? '行内' : '垂直'}
        </Button>
        <Menu mode={this.state.mode ? 'vertical' : 'inline'} defaultSelectedKeys={['1']} inlineCollapsed={this.state.collapsed} theme={this.state.darken ? 'dark' : 'light'}>
          <Menu.Item key="mail">Navigation One</Menu.Item>
          <Menu.Item key="app" disabled>
            Navigation Two
          </Menu.Item>
          <SubMenu icon={<Icon type="i-danmu" />} title="Navigation 3 - Submenu">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu icon={<Icon type="i-play" />} title="Navigation 4 - Submenu">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default App;
