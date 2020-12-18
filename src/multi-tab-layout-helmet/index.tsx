import React, { useState, useEffect } from 'react';
import { Tabs, Button, Tooltip } from 'antd';
import Icon from '../icon';
import { MultiTabLayoutProps, DataSourceType } from './index.type';
import { cloneDeep } from 'lodash-es';
import Dispatcher from './model';

const findTabInfoByTargetKey = ($targetKey, $dataSource, $rowKey = 'key') => {
  let index = 0;
  let tabInfo = {};
  for (let i = 0; i < $dataSource.length; i++) {
    const data = $dataSource[i];
    if (data[$rowKey] === $targetKey) {
      index = i;
      tabInfo = data;
      break;
    }
  }
  return {
    index,
    tabInfo,
  };
};

const { TabPane } = Tabs;
// 显示辅助功能的tab数量边界
const gap = 6;
const MultiTabLayoutHelmet = (props: MultiTabLayoutProps) => {
  const { dispatcher, onChange, indexPage, dataSource, rowKey, ...others } = props;

  const theIndexKey = rowKey || 'key';
  const hasHome = !!indexPage;
  const [tabs, setTabs] = useState(dataSource || []);
  const [showHome, toggleShowhome] = useState(hasHome);
  const [activeKey, setActiveKey] = useState(hasHome && showHome ? 'admini-home' : dataSource?.[0]?.[theIndexKey]);

  const hasOberserved = !!dispatcher;
  const realDispatcher =
    dispatcher && Dispatcher.checkValid(dispatcher)
      ? dispatcher
      : {
          listen: () => false,
        };

  return (
    <Tabs
      activeKey={activeKey}
      type="editable-card"
      tabBarExtraContent={
        tabs.length >= gap ? (
          <Tooltip title="关闭全部">
            <Button size="small" onClick={() => setTabs([])}>
              <Icon type="gutline_error" style={{ fontSize: 12 }} />
            </Button>
          </Tooltip>
        ) : null
      }
      onEdit={(...e) => {
        const [targetKey, action] = e;
        if (action === 'remove') {
          const { index } = findTabInfoByTargetKey(targetKey, tabs, theIndexKey);
          const { index: activeIndex } = findTabInfoByTargetKey(activeKey, tabs, theIndexKey);
          const newTabs = cloneDeep(tabs);
          if (targetKey !== 'admini-home') {
            newTabs.splice(index, 1);
          }
          if (targetKey === 'admini-home') {
            toggleShowhome(false);
          }
          if (activeIndex === index) {
            // 如果当前选中的就是将要删除的标签，且当前是第1页
            // 那么就用删除后数据的第一个元素作为activeKey
            // 否则使用删除后数据的当前位置作为activeKey
            if (targetKey === 'admini-home') {
              // 如果关闭的是主页
              toggleShowhome(false);
              setActiveKey(newTabs[0]?.[theIndexKey]);
            } else {
              setActiveKey(newTabs[index === 0 ? 0 : index]?.[theIndexKey]);
            }
          }
          setTabs(newTabs);
        }
        props.onEdit?.(...e);
      }}
      onTabClick={(...e) => {
        setActiveKey(e[0]);
        props.onTabClick?.(...e);
      }}
      {...others}
      tabBarGutter={props.tabBarGutter || 0 + tabs.length >= gap ? 3 : 15}>
      {hasHome && (showHome || tabs.length < 1) ? (
        <TabPane tab="主页" key="admini-home" closable={tabs.length > 0}>
          {indexPage}
        </TabPane>
      ) : null}
      {tabs?.map((tabInfo: DataSourceType) => {
        return (
          <TabPane tab={tabInfo.label || '--'} key={tabInfo.key} closable={tabInfo.closable || true}>
            {tabInfo.component}
          </TabPane>
        );
      })}
    </Tabs>
  );
};
export default MultiTabLayoutHelmet;
