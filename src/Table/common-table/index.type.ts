import { ColumnProps, TableProps, TablePaginationConfig } from 'antd/lib/table';
import { PresetColorType, PresetStatusColorType } from 'antd/lib/_util/colors';
import { LiteralUnion } from 'antd/lib/_util/type';
import { typeValueRefers } from '.';
import { typeFormItemRefers } from '../common-search';

export interface IColumnTypes<T> extends ColumnProps<T> {
  type?: string;
  enums?: EnumsType | TagEnumsType;
  primary?: number | boolean;

  // ⬇️配合commonSearchForm
  // 是否添加该项的搜索到commonSearchForm中
  searchable?: true | number;
  // 在searchForm中显示的key title
  searchLabel?: string;
  // 在searchForm中显示的ui类型
  searchType?: keyof typeof typeFormItemRefers;
  // 占据的格栅宽度
  searchColSpan?: number;
}
export type recordedType = any;
export type IExtraSearchType = Omit<IColumnTypes<unknown>, 'primary' | 'searchable'>;

export interface ITableTypes<T> extends TableProps<T> {
  columns: IColumnTypes<T>[];
  extraSearchs?: IExtraSearchType[];
  tools?: React.ReactNode;
  onSearch?: (params: Record<any, string>) => void;
  onReset?: () => void;
}
export type SupporttedColumnTypes = keyof typeof typeValueRefers;
export type ColorTypes = LiteralUnion<PresetColorType | PresetStatusColorType, string>;
export type EnumsType = Record<string, { text?: string; color?: ColorTypes; status?: string; desc?: string }>;
export type TagEnumsType = { [key: string]: string };
