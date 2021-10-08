/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, Tabs as AntdTabs, Dropdown } from 'antd';
import { TabsProps } from 'antd/lib/tabs';
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { createBem } from '../shared/utils';
import { ITabsProp, TTabPaneInfo } from './index.type';
import { getDataType } from 'mytils';
import flatten from 'lodash/flatten';
import Icon from '../icon';
import './custom-tab-bar.less';
import './index.less';

const defaultKey = 1;
const bem = createBem('tabs');
const AntdTabsAlias = AntdTabs;

const ContextMenuTabs = (props: ITabsProp) => {
  const { children, contextMenu, onChange, onEdit, onTabClick, hideAdd, onContextMenuCapture, onContextMenuVisibleChange, ...others } = props;

  //
  const [activeKey, setActiveKey] = useState<TTabPaneInfo['key']>(defaultKey);
  useEffect(() => {
    onChange?.(activeKey?.toString());
  }, [activeKey]);
  useEffect(() => {
    setActiveKey(others.activeKey || '');
  }, [others.activeKey]);

  const renderTabBar = useCallback(
    (opts: any) => {
      //
      let tabs = [];
      if (opts?.panes?.length) {
        tabs = opts.panes
          ?.filter((_) => _)
          ?.map((item) => {
            return {
              key: item.key || item.props?.tab,
              title: item.props?.tab,
              props: item.props,
            };
          });
      }

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
          <div className="ant-tabs-nav" role="tablist">
            <ul className={`${bem('wrapper')} ant-tabs-nav-list ant-tabs-nav-wrap`}>
              {tabs?.map((tab: { key: any; title: string; props: any }) => {
                const { props: tabProps } = tab;
                const closable = tabProps.closable !== false && tabProps.closable !== 'false';
                return tab && tabProps ? (
                  <li
                    className={
                      bem('tab-pane') +
                      ` ant-tabs-tab ` +
                      (activeKey?.toString() === tab.key ? ' active ant-tabs-tab-active' : '') +
                      (contextMenuCapturedKey === tab.key && contextMenuVisible ? ' context-menu-active ' : '' + closable ? ' ant-tabs-tab-with-remove' : '')
                    }
                    key={tab?.key}
                    onClick={(e) => {
                      setActiveKey(tab?.key);
                      onTabClick?.(tab?.key, e);
                    }}
                    onContextMenu={(e) => {
                      setContextMenuCapturedKey(tab?.key);
                      onContextMenuCapture?.(tab, e);
                    }}
                    role="button">
                    <span className="ant-tabs-tab-btn">{tab.title}</span>
                    {closable ? (
                      <button
                        type="button"
                        className={bem('remove-button') + ' ant-tabs-tab-remove'}
                        onClick={(e) => {
                          onEdit?.(tab?.key, 'remove');
                          e.stopPropagation();
                        }}>
                        <Icon type="gutline_error" style={{ fontSize: 12 }} />
                      </button>
                    ) : null}
                  </li>
                ) : null;
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
          </div>
        </Dropdown>
      );
    },
    [props.children, contextMenu, activeKey],
  );

  return (
    <AntdTabsAlias
      className={others.type === 'editable-card' ? 'ant-tabs-editable ant-tabs-card ant-tabs-editable-card' : ''}
      {...(contextMenu !== undefined ? { renderTabBar } : {})}
      activeKey={activeKey?.toString()}
      {...others}>
      {getDataType(children) === 'array' ? flatten(children as React.ReactNode[]) : children}
    </AntdTabsAlias>
  );
};

interface compositedComponent extends React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLElement>> {
  ContextMenuTabs: typeof ContextMenuTabs;
  TabPane: typeof AntdTabsAlias.TabPane;
}

const Tabs = AntdTabsAlias as compositedComponent;
Tabs.ContextMenuTabs = ContextMenuTabs;

export default Tabs;
