// <reference types="react" />
import React from 'react';
import { CardProps } from 'antd/lib/card';
import { IColumnTypes } from '../Table/common-table/index.type';
export { SupporttedColumnTypes } from '@/Table/common-table/index.type';
import { TableProps as RcTableProps } from 'rc-table/lib/Table';

export interface IDetailCardColumn {
  dataIndex: string;
  title: string;
  type?: string;
  render?: (val: any, row: any, index: number) => React.ReactNode;
  wrap?: boolean;
}
export type SupporttedNullExceptorTypes = '--' | '';
export interface IDetailCardProps extends CardProps {
  dataSource: RcTableProps<unknown>['data'];
  columns: IDetailCardColumn[] | IColumnTypes<any>[];
  displayType?: 'grid' | 'table';
  colSpan?: number;
  placeholder?: SupporttedNullExceptorTypes;
  linkable?: boolean;
}
