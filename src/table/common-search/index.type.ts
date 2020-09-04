import { TableProps } from 'antd/lib/table';
import { IColumnTypes } from '../common-table/index.type';
import { KeepAliveProps } from '../../shared/keep-alive/keep-alive.type';

export interface ICommonSearch<T> extends TableProps<T> {
  columns?: IColumnTypes<T>[];
  onSearch?: (e) => void;
  onReset?: (e) => void;
  onSearchFailed?: (e) => void;
  colCount: number;
  // 工具栏，用于table附加操作，比如新增、上传etc,
  tools?: React.ReactNode[];
  // 左侧操作栏，一般用于对table的批量操作
  operations?: React.ReactNode[];
  initialSearchValues?: Record<string, any>;
  // keep-alive功能缓存的key
  cacheKey?: KeepAliveProps['name'];
  // 当keep-alive对应的key被命中时触发
  onCacheHitted?: KeepAliveProps['onCacheHitted'];
}
