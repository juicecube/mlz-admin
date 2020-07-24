import { TableProps } from 'antd/lib/table';
import { IColumnTypes, IExtraSearchType } from '../common-table/index.type';
export interface ICommonSearch<T> extends TableProps<T> {
  columns?: IColumnTypes<T>[];
  onSearch?: (e) => void;
  onReset?: (e) => void;
  onSearchFailed?: (e) => void;
  colCount: number;
  tools?: React.ReactNode | React.ReactNode[];
  initialSearchValues?: Record<string, any>;
}
