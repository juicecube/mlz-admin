import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Tabs from '..';

const { TabPane } = Tabs;
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
describe('🧪 Tabs', () => {
  testMount(TempTabsMounter);
  testSnapshot(TempTabsMounter);

  const TabsWrapper = () => {
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

  // contextMenu属性设置内容时，渲染对应的tabbar
  test('ContextMenuTabs正确浅渲染子元素', () => {
    const { ContextMenuTabs } = Tabs;

    expect(() => {
      wrapper.unmount();
    }).not.toThrow();
  });

  // contextMenu属性设置内容时，且唤起contextMenu时展示菜单
  // contextMenu属性设置内容时，点击tab标签页切换指定标签页且正确触发事件
  // contextMenu属性设置内容时，点击add标签页正确触发事件
});
