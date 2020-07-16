// <reference types="react" />
import React from 'react';
import { typeValueRefers } from './DetailCard';
import { CardProps } from 'antd/lib/card';

export interface IDetailCardColumn {
  dataIndex: string;
  type?: string;
  render?: (val: any, row: any, index: number) => React.ReactNode;
}
export type SupporttedColumnTypes = keyof typeof typeValueRefers;
export type SupporttedNullExceptorTypes = '--' | '';
export interface IDetailCardProps extends CardProps {
  dataSource: Record<string, any>;
  columns: IDetailCardColumn[] | string[];
  displayType?: 'grid' | 'table';
  colSpan?: number;
  nullExceptor?: SupporttedNullExceptorTypes;
}
