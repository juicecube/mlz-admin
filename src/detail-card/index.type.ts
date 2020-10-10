// <reference types="react" />
import React from 'react';
import { CardProps } from 'antd/lib/card';
import { DescriptionsProps } from 'antd/lib/descriptions';
import { IColumnTypes } from '../table/common-table/index.type';
import { TableProps as RcTableProps } from 'rc-table/lib/Table';

export interface IDetailCardColumn {
  dataIndex: string;
  title: string;
  type?: IColumnTypes<unknown>['type'];
  render?: (val: any, row: any, index: number) => React.ReactNode;
  span?: string | number;
}
export type SupporttedNullExceptorTypes = '--' | '';
export interface IDetailCardProps extends CardProps {
  dataSource: RcTableProps<unknown>['data'];
  columns: IDetailCardColumn[] | IColumnTypes<any>[];
  // 当前详情块是 普通格栅 还是 表格
  displayType?: 'grid' | 'table';
  // 当前模块都没没有数据时的展示内容
  noDataResult?: React.ReactNode;
  // 标题是否可锚击(方便用户直接跳转)
  linkable?: boolean;
  // description的配置
  descriptionProps?: DescriptionsProps;
}
