import { TableProps } from 'antd/lib/table';
import { IColumnTypes } from '../common-table/index.type';
import { KeepAliveProps } from './../../shared/keep-alive/keep-alive.type';

export interface ICommonSearch<T> extends TableProps<T> {
  columns?: IColumnTypes<T>[];
  onSearch?: (e) => void;
  onReset?: (e) => void;
  onSearchFailed?: (e) => void;
  colCount: number;
  tools?: React.ReactNode | React.ReactNode[];
  initialSearchValues?: Record<string, any>;
  // keep-alive功能缓存的key
  cacheKey?: KeepAliveProps['name'];
  // 当keep-alive对应的key被命中时触发
  onCacheHitted?: KeepAliveProps['onCacheHitted'];
}
