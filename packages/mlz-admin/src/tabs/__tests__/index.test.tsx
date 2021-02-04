import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Tabs from '..';

const { TabPane } = Tabs;
const TempTabsMounter = () => (
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
describe('🧪 Tabs', () => {
  testMount(TempTabsMounter);
  testSnapshot(TempTabsMounter);
});
