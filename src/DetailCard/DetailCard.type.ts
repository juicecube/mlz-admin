// <reference types="react" />
import React from 'react';
import { typeValueRefers } from './DetailCard';
import { CardProps } from 'antd/lib/card';
import { IColumnTypes } from '../Table/commonTable/index.type';

export interface IDetailCardColumn {
  dataIndex: string;
  title: string;
  type?: string;
  render?: (val: any, row: any, index: number) => React.ReactNode;
  wrap?: boolean;
}
export type SupporttedColumnTypes = keyof typeof typeValueRefers;
export type SupporttedNullExceptorTypes = '--' | '';
export interface IDetailCardProps extends CardProps {
  dataSource: Record<string, any>;
  columns: IDetailCardColumn[] | string[] | IColumnTypes<any>[];
  displayType?: 'grid' | 'table';
  colSpan?: number;
  nullExceptor?: SupporttedNullExceptorTypes;
}
