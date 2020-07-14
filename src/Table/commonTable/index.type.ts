import { ColumnProps, TableProps, TablePaginationConfig } from 'antd/lib/table';
import { PresetColorType, PresetStatusColorType } from 'antd/lib/_util/colors';
import { LiteralUnion } from 'antd/lib/_util/type';
import { typeValueRefers } from '.';

export interface ITableTypes<T> extends TableProps<T> {
  columns: IColumnTypes<T>[];
  tools?: React.ReactNode[];
  onSearch?: () => void;
}
export type SupporttedColumnTypes = keyof typeof typeValueRefers;
export type ColorTypes = LiteralUnion<PresetColorType | PresetStatusColorType, string>;
export type EnumsType = Record<string, { text?: string; color?: ColorTypes; status?: string; desc?: string }>;
export type TagEnumsType = { [key: string]: string };
export interface IColumnTypes<T> extends ColumnProps<T> {
  type?: string;
  enums?: EnumsType | TagEnumsType;
  primary?: number | boolean;
  // ⬇️配合commonSearchForm
  searchable?: true | number;
  searchLabel?: string;
}
export type recordedType = any;
