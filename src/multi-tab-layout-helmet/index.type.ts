import React from 'react';
import { TabsProps } from 'antd/lib/tabs';

export interface ObservedType {
  listen(params: unknown): boolean;
  [key: string]: any;
}
export interface DataSourceType {
  // tab页的内容
  component: React.ReactNode;
  // 标签的展示内容的索引key
  label: React.ReactNode;
  // 标签的唯一key值
  key: string;
  // 是否允许关闭
  closable?: boolean;
  // 是否开启keepAlive功能，以优化性能
  // remark: 1. MultiTabLayoutProps.keepAlive的权重比较高
  keepAlive?: boolean;
}
export interface MultiTabLayoutProps extends Omit<TabsProps, 'type'> {
  // 推送到组件内，为Tab标签提供渲染的数据
  dataSource: DataSourceType[];
  // 触发新增/切换Tab的观察对象
  // remark: 1. 必须遵守一定协议：该对象必须有一个listen方法
  //         2. 如果指定了dispatcher，则会在dispatcher的listen方法中更新Tabs组件
  dispatcher?: ObservedType;
  // 用来进行activeKey判断的主键，默认是"key"
  rowKey?: string;
  // 主页组件
  indexPage?: React.ReactNode;
  // 是否开启keepAlive功能，以优化性能
  keepAlive?: boolean;
}
