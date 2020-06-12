import { ColumnProps, TableProps, TablePaginationConfig } from 'antd/lib/table';

export interface IColumnTypes<T> extends ColumnProps<T> {
  type?: string; //type代替render函数，减少重复render的编写
  enums?: any;
  path?: string;
  encodedIndex?: string;
}
export interface ITableTypes<T> extends TableProps<T> {
  dataSource: any[];
  columns: IColumnTypes<T>[];
  pagination?: TablePaginationConfig; //是否需要分页逻辑
  total?: number;
  limit?: number;
  current?: number;
  loading?: boolean;
  rowKey?: string;
  onPageChange?: (page: { current: number; limit: number }) => void;
  onSearch?: () => void;
}
export interface FieldTypes {
  [key: string]: (value: any, record: any, column?: IColumnTypes<unknown>) => number | string | JSX.Element;
}
