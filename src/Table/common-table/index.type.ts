import { ColumnProps, TableProps, TablePaginationConfig } from 'antd/lib/table';
import { PresetColorType, PresetStatusColorType } from 'antd/lib/_util/colors';
import { LiteralUnion } from 'antd/lib/_util/type';
import { typeValueRefers } from '.';
import { KeepAliveProps } from './../../shared/keep-alive/keep-alive.type';
import { typeFormItemRefers } from '../common-search';

export interface IColumnTypes<T> extends ColumnProps<T> {
  type?: string;
  // 当type=enums|tags时的枚举
  enums?: EnumsType | TagEnumsType;
  // 指定为primary的column的dataIndex会被设置为Table.rowKey
  primary?: number | boolean;
  // ⬇️配合commonSearchForm
  // 是否在table中隐藏该列
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
  searchRender?: React.ReactNode | React.ReactNode[];
  // 自定义搜索formName，即搜索条件中的key
  searchKey?: string | symbol;
}
export type IExtraSearchType = Omit<IColumnTypes<unknown>, 'primary' | 'searchable'>;

export interface ITableTypes<T> extends TableProps<T> {
  columns: IColumnTypes<T>[];
  // 工具栏
  tools?: React.ReactNode;
  // 搜索条件submit时触发
  onSearch?: (params: Record<any, string>) => void;
  // TODO：后面会取消onReset方法，合并到onSearch中
  onReset?: (params: Record<any, string>) => void;
  // keep-alive功能缓存的key
  cacheKey?: KeepAliveProps['name'];
  // 当keep-alive对应的key被命中时触发
  onCacheHitted?: KeepAliveProps['onCacheHitted'];
}
export type SupporttedColumnTypes = keyof typeof typeValueRefers;
export type ColorTypes = LiteralUnion<PresetColorType | PresetStatusColorType, string>;
export type EnumsType = Record<string, { text?: string; color?: ColorTypes; status?: string; desc?: string }>;
export type TagEnumsType = { [key: string]: string };
