/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, Tabs as AntdTabs, Dropdown } from 'antd';
import { TabsProps } from 'antd/lib/tabs';
import React, { useEffect, useMemo, useState } from 'react';
import { createBem } from '../shared/utils';
import './custom-tab-bar.less';
import './index.less';
import { ITabsProp, TTabPaneInfo } from './index.type';

const defaultKey = 1;
const bem = createBem('tabs');
const AntdTabsVariety = AntdTabs;
const ContextMenuTabs = (props: ITabsProp) => {
  const { children, contextMenu, onChange, onEdit, onTabClick, hideAdd, onContextMenuCapture, onContextMenuVisibleChange, ...others } = props;

  //
  const [activeKey, setActiveKey] = useState<TTabPaneInfo['key']>(defaultKey);
  useEffect(() => {
    onChange?.(activeKey.toString());
  }, [activeKey]);

  //
  const renderTabBar = (opts: any) => {
    //
    const tabs = useMemo(() => {
      return opts.panes?.map((item) => {
        return {
          key: item.key || item.props.tab,
          title: item.props.tab,
        };
      });
    }, [opts.panes]);

    //
    const [contextMenuVisible, toggleContextMenuVisible] = useState(false);
    const [contextMenuCapturedKey, setContextMenuCapturedKey] = useState(defaultKey);

    return (
      <Dropdown
        overlay={contextMenu!}
        trigger={['contextMenu']}
        onVisibleChange={(visible) => {
          toggleContextMenuVisible(visible);
          onContextMenuVisibleChange?.(visible);
        }}>
        <ul className={bem('wrapper')}>
          {tabs?.map((tab) => {
            return (
              <li
                className={bem('tab-pane') + (activeKey.toString() === tab.key ? ' active' : '') + (contextMenuCapturedKey === tab.key && contextMenuVisible ? ' context-menu-active' : '')}
                key={tab.key}
                onClick={(e) => {
                  setActiveKey(tab.key);
                  onTabClick?.(tab.key, e);
                }}
                onContextMenu={(e) => {
                  setContextMenuCapturedKey(tab.key);
                  onContextMenuCapture?.(tab, e);
                }}
                role="button">
                <span className="ant-tabs-tab-btn">{tab.title}</span>
                <button
                  type="button"
                  className={bem('remove-button') + ' ant-tabs-tab-remove'}
                  onClick={(e) => {
                    onEdit?.(tab.key, 'remove');
                    e.stopPropagation();
                  }}>
                  x
                </button>
              </li>
            );
          })}
          {hideAdd !== true ? (
            <li
              className={bem('tab-pane')}
              style={{ padding: '0 8px', height: 39 }}
              onClick={(e) => {
                onEdit?.(e, 'add');
              }}
              role="button">
              <Button className="ant-tabs-add-btn" type="link">
                +
              </Button>
            </li>
          ) : null}
        </ul>
      </Dropdown>
    );
  };

  return (
    <AntdTabsVariety {...(contextMenu ? { renderTabBar } : {})} activeKey={activeKey.toString()} {...others}>
      {children}
    </AntdTabsVariety>
  );
};

interface compositedComponent extends React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLElement>> {
  ContextMenuTabs: typeof ContextMenuTabs;
  TabPane: typeof AntdTabsVariety.TabPane;
}

const Tabs = AntdTabsVariety as compositedComponent;
Tabs.ContextMenuTabs = ContextMenuTabs;
Tabs.TabPane = AntdTabsVariety.TabPane;

export default Tabs;
