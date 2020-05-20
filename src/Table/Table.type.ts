// / <reference types="react" />
import React from 'react';
import { SizeType } from 'antd/es/config-provider/SizeContext.d';
import { ProColumnType, ProTableTypes } from '@ant-design/pro-table/lib/Table.d';
import { ProColumnsValueType } from '@ant-design/pro-table/lib/defaultRender.d';
import { StatusType } from '@ant-design/pro-table/lib/component/status/index.d';
import { OptionConfig } from '@ant-design/pro-table/lib/component/toolBar';
import { TablePaginationConfig } from 'antd/es/table/interface.d';
import { SearchConfig } from '@ant-design/pro-table/lib/Form';
import { ToolBarProps } from '@ant-design/pro-table/lib/component/toolBar/index.d';

export type paginationLimit = 10 | 20 | 50 | 100;
export type changeHandlerData = Partial<{
  current: number;
  limit: number;
}>;

// TODO 不是继承自pro table
export interface TableProps {
  columns: ColumnTypes[];
  data: Record<string | symbol, any>[];
  options?: false | OptionConfig<unknown>;
  headerTitle?: string | false;
  toolBarRender?: ToolBarProps['toolBarRender'] | false;
  size?: SizeType;
  limit?: paginationLimit;
  current?: number;
  total?: number;
  pagination?: TablePaginationConfig | false;
  onSearch?: (formData: Record<string, any>) => void;
  onSearchReset?: () => void;
  onChange?: (formData: changeHandlerData) => void;
  rowKey?: string;
  type?: ProTableTypes;
  keepAlive?: string;
  loading?: boolean;
  search?: false | SearchConfig;
}

export type ColorEnums = StatusType | 'Planned' | 'Adviced';

export interface EnumObjectEnum {
  text: string;
  status: ColorEnums;
  redundances?: string;
}

export interface ColumnTypes extends Omit<ProColumnType, 'valueType'> {
  searchable?: boolean | number;
  primary?: boolean;
  valueType?: ProColumnsValueType | 'tag' | Enumerator;
  valueEnum?: { [key: string]: EnumObjectEnum };
  render?: (...args: any) => React.ReactNode;
  dataIndex?: string;
}
