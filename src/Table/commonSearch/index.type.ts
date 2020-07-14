import { IColumnTypes } from '../commonTable/index.type';

export interface ICommonSearch<T> {
  columns?: IColumnTypes<T>[];
  onSearch?: () => void;
  onSubmit?: () => void;
  colCount: number;
  tools?: React.ReactNode[];
}
