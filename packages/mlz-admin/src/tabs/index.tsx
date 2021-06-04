import React, { useState } from 'react';
import { Tabs as AntdTabs, Dropdown, Menu } from 'antd';
import './index.less';
import { ITabsProp } from './index.type';

const Tabs = (props: ITabsProp) => {
  const { children, contextMenu, ...others } = props;

  const [activeKey, setActiveKey] = useState(1);

  //
  const renderTabBar = (opts: any) => {
    const tabs: { key: number; title: string }[] = [];
    opts.panes?.forEach((item) => {
      tabs.push({
        key: item.key,
        title: item.props.tab,
      });
    });
    return (
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item>
              <div>关闭当前标签页</div>
            </Menu.Item>
            <Menu.Item>
              <div>关闭其他标签页</div>
            </Menu.Item>
            <Menu.Item>
              <div>关闭全部标签页</div>
            </Menu.Item>
          </Menu>
        }
        trigger={['contextMenu']}>
        <div style={{ color: 'red' }}>
          {tabs.map((tab) => {
            return (
              <span key={tab.key} onClick={() => setActiveKey(tab.key)}>
                <span style={{ padding: '0 16px' }}>{tab.title}</span>
              </span>
            );
          })}
        </div>
      </Dropdown>
    );
  };

  return (
    <AntdTabs {...(contextMenu ? { renderTabBar } : {})} activeKey={activeKey.toString()} {...others}>
      {children}
    </AntdTabs>
  );
};
Tabs.TabPane = AntdTabs.TabPane;

export default Tabs;
