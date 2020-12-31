import React from 'react';
import { TabsProps } from 'antd/lib/tabs';
import * as H from 'history';
import { RouteProps } from 'react-router';

export interface ObservedType {
  listen(params: unknown): boolean;
  [key: string]: any;
}
export type RouterType = RouteProps;
export interface DataSourceType {
  // tab页的内容
  component: React.ReactNode;
  // 标签的展示内容的索引key
  label: React.ReactNode;
  // 标签的唯一key值
  key: string | string[];
  // 是否允许关闭
  closable?: boolean;
  // 是否开启keepAlive功能，以优化性能
  // remark: 1. MultiTabLayoutProps.keepAlive的权重比较高
  // keepAlive?: boolean;
}
export interface MultiTabLayoutProps extends Omit<TabsProps, 'type'> {
  // 推送到组件内，为Tab标签提供渲染的数据
  dataSource: DataSourceType[];
  // 是否开启路由响应
  // remark: 开启之后，如果当前pathname与tab标签的key存在match关系（由react-router的useMatch决定），则切换到对应的tab
  //                 当history发生更改，则打开新的标签页或弹到指定的tab标签
  observer?: H.History<unknown>;
  // react-router配置
  routers: RouterType[];
  // 用来进行activeKey判断的主键，默认是"key"
  rowKey?: string;
  // 主页组件
  indexPage?: React.ReactNode;
  // 是否开启keepAlive功能，以优化性能
  // keepAlive?: boolean;
}
