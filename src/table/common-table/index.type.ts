import React from 'react';
import { ColumnProps, TableProps } from 'antd/lib/table';
import { PresetColorType, PresetStatusColorType } from 'antd/lib/_util/colors';
import { LiteralUnion } from 'antd/lib/_util/type';
import { typeValueRefers } from '.';
import { typeFormItemRefers } from '../common-search';
import { ICommonSearch } from '../common-search/index.type';

export type recordedType = any;
export type SearchItemType = { [key: string]: any };
export type SupporttedColumnTypes = keyof typeof typeValueRefers;
export type ColorTypes = LiteralUnion<PresetColorType | PresetStatusColorType, string>;
export type EnumsType = Record<string, { text?: string; color?: ColorTypes; status?: string; desc?: string }>;
export type TagEnumsType = { [key: string]: string };
export interface IColumnTypes<T> extends ColumnProps<T> {
  type?: keyof typeof typeValueRefers | string;
  // 当type=enums|tags时的枚举
  enums?: EnumsType | TagEnumsType;
  // 指定为primary的column的dataIndex会被设置为Table.rowKey
  primary?: boolean;
  // 是否在table.search中隐藏该列
  hidden?: boolean;
  // 是否添加该项的搜索到commonSearchForm中
  searchable?: boolean | number;
  // 在searchForm中显示的key title
  searchLabel?: string;
  // 在searchForm中显示的ui类型
  searchType?: keyof typeof typeFormItemRefers | string;
  // 占据的格栅宽度
  searchColSpan?: number;
  // 渲染form块
  searchRender?: React.ReactNode | React.ReactNode;
  // 自定义搜索formName，即搜索条件中的key
  searchKey?: string | symbol;
  // 拓展属性
  searchItemProps?: SearchItemType;
}
export type IExtraSearchType = Omit<IColumnTypes<unknown>, 'primary' | 'searchable'>;

export interface ITableTypes<T> extends TableProps<T>, ICommonSearch<T> {
  columns: IColumnTypes<T>[];
}
