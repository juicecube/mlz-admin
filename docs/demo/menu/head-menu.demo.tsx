/**
 * title: 顶部导航
 * desc: 水平的顶部导航菜单。
 */
import React from 'react';
import Menu from '@/Menu/Menu';
import Icon from '@/Icon/Icon';

const { SubMenu } = Menu;
class App extends React.PureComponent {
  state = {
    data: [],
    loading: true,
  };

  render() {
    return (
      <Menu mode="horizontal">
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
    );
  }
}

export default App;
