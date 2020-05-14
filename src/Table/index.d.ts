// / <reference types="react" />
import React from 'react';
import { SizeType } from 'antd/es/config-provider/SizeContext.d';
import { ProColumnType, ProTableTypes } from '@ant-design/pro-table/lib/Table.d';
import { OptionConfig } from '@ant-design/pro-table/lib/component/toolBar';
import { TablePaginationConfig } from 'antd/es/table/interface.d';
import { SearchConfig } from '@ant-design/pro-table/lib/Form';
import { ToolBarProps } from '@ant-design/pro-table/lib/component/toolBar/index.d';

declare namespace CommonTableTypes {
  export type paginationLimit = 10 | 20 | 50 | 100;
  export type changeHandlerData = Partial<{
    current: number;
    limit: number;
  }>;
  export interface TableProps {
    columns: ColumnTypes[];
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
    // first case
    data: Record<string, any>[];
    // the other
    // url?: URL['href'];
    // listName?: string;
    // method?: HTMLFormElement['method'];
  }

  export type ColorEnums = 'default' | 'processing' | 'error' | 'warning' | 'success' | 'planned' | 'adviced';

  export interface EnumObjectEnum {
    text: string;
    status: ColorEnums;
    redundance?: any;
  }

  export interface ColumnTypes extends ProColumnType {
    searchable?: boolean | number;
    primary?: boolean;
    order?: number;
    valueType?: ProColumnType['valueType'] & 'tag';
    valueEnum: Record<string, EnumObjectEnum>;
    render?: (...args: any) => React.ReactNode;
    dataIndex?: string;
  }
}
