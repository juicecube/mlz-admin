import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Tabs from '..';
import Menu from '../../menu';
import { mount } from 'enzyme';

const paneList = [
  {
    tab: 'Tab 1',
    key: '1',
    children: 'Content of Tab Pane 1',
  },
  {
    tab: 'Tab 2',
    key: '2',
    children: 'Content of Tab Pane 2',
  },
  {
    tab: 'Tab 3',
    key: '3',
    children: 'Content of Tab Pane 3',
  },
  {
    tab: 'Tab 4',
    key: '4',
    children: 'Content of Tab Pane 4',
  },
];

const menuList = [
  {
    title: 'tab1',
  },
  {
    title: 'tab2',
  },
  {
    title: 'tab3',
  },
];

const { TabPane, ContextMenuTabs } = Tabs;
const TempTabsMounter = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

const contextMenuTabsWrapper = mount(
  <ContextMenuTabs
    hideAdd
    contextMenu={
      <Menu>
        {menuList.map((item) => {
          return <Menu.Item key={item.title}>{item.title}</Menu.Item>;
        })}
      </Menu>
    }>
    {paneList.map((item) => {
      return (
        <TabPane tab={item.tab} key={item.key}>
          {item.children}
        </TabPane>
      );
    })}
  </ContextMenuTabs>,
);

describe('🧪 Tabs', () => {
  //
  testMount(TempTabsMounter);
  testSnapshot(TempTabsMounter);

  // contextMenu属性设置内容时，渲染对应的tabbar
  test('ContextMenuTabs正确浅渲染子元素', () => {
    expect(contextMenuTabsWrapper.find('.admini-tabs__tab-pane').length).toBe(paneList.length);
  });

  // contextMenu属性设置内容时，且唤起contextMenu时展示菜单
  test('ContextMenuTabs的contextMenu属性正确被触发', () => {
    contextMenuTabsWrapper
      .find('.admini-tabs__tab-pane')
      .first()
      .simulate('contextmenu');
    expect(document.getElementsByClassName('ant-dropdown-menu-item').length).toBe(menuList.length);
  });

  // contextMenu属性设置内容时，点击tab标签页切换指定标签页且正确触发事件
  test('ContextMenuTabs的Tab点击后可以正确切换', () => {
    contextMenuTabsWrapper
      .find('.admini-tabs__tab-pane')
      .at(1)
      .simulate('click');
    expect(contextMenuTabsWrapper.find('.admini-tabs__tab-pane').length).toBe(paneList.length);
    expect(
      contextMenuTabsWrapper
        .find('.admini-tabs__tab-pane')
        .at(1)
        .hasClass('active'),
    ).toBeTruthy();
  });

  // contextMenu属性设置内容时，点击add标签页正确触发事件
  test('ContextMenuTabs的Tab点击后正确触发事件', () => {
    const onTabClickHandler = jest.fn();
    const onChangeHandler = jest.fn();

    const tempContextMenuTabsWrapper = mount(
      <ContextMenuTabs
        hideAdd
        onTabClick={onTabClickHandler}
        onChange={onChangeHandler}
        contextMenu={
          <Menu>
            {menuList.map((item) => {
              return <Menu.Item key={item.title}>{item.title}</Menu.Item>;
            })}
          </Menu>
        }>
        {paneList.map((item) => {
          return (
            <TabPane tab={item.tab} key={item.key}>
              {item.children}
            </TabPane>
          );
        })}
      </ContextMenuTabs>,
    );

    const indexNumber = 1;
    tempContextMenuTabsWrapper
      .find('.admini-tabs__tab-pane')
      .at(indexNumber)
      .simulate('click');
    expect(onTabClickHandler).toHaveBeenCalled();
    // 一次是初始化时的变化，一次是click时的变化
    expect(onChangeHandler).toHaveBeenCalledTimes(3);
  });

  // TODO: contextMenu属性设置内容时，点击关闭和新增按钮触发对应的onEdit事件
});
