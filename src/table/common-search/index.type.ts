import { TableProps } from 'antd/lib/table';
import { IColumnTypes } from '../common-table/index.type';
import { KeepAliveProps } from '../../shared/keep-alive/keep-alive.type';

export interface ICommonSearch<T> {
  // 搜索表单的配置数据
  columns: IColumnTypes<T>[];
  // 开始搜索 时触发
  onSearch?: (e) => void;
  // 搜索表单提交失败 时触发
  onSearchFailed?: (e) => void;
  // 点击重置按钮 时触发
  onReset?: (e) => void;
  // 每行展示searchFormItem的数量，默认是4
  colCount?: number;
  // 搜索表单的默认值
  initialSearchValues?: Record<string, any>;
  // 工具栏，用于table附加操作，比如新增、上传etc,
  tools?: React.ReactNode[];
  // 左侧操作栏，一般用于对table的批量操作
  operations?: React.ReactNode[];
  // keep-alive功能缓存的key
  cacheKey?: KeepAliveProps['name'];
  // 当keep-alive对应的key被命中时触发
  onCacheHitted?: KeepAliveProps['onCacheHitted'];
  // 隐藏过多搜索内容后，剩余的搜索item数量
  searchCollapsedThreshold?: number;
}
