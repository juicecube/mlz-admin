// <reference types="react" />
import React from 'react';
import { CardProps } from 'antd/lib/card';
import { IColumnTypes } from '../Table/common-table/index.type';
export { SupporttedColumnTypes } from '@/Table/common-table/index.type';

export interface IDetailCardColumn {
  dataIndex: string;
  title: string;
  type?: string;
  render?: (val: any, row: any, index: number) => React.ReactNode;
  wrap?: boolean;
}
export type SupporttedNullExceptorTypes = '--' | '';
export interface IDetailCardProps extends CardProps {
  dataSource: Record<string, any>;
  columns: IDetailCardColumn[] | string[] | IColumnTypes<any>[];
  displayType?: 'grid' | 'table';
  colSpan?: number;
  placeholder?: SupporttedNullExceptorTypes;
  linkable?: boolean;
}
