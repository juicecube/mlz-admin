import React, { useContext } from 'react';
import { Table, Tooltip, Tag, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import KeepAlive, { KAContext } from '../../shared/keep-alive';
import { formatUnixTime, omitProps, getRatioFromNum } from 'mytils';
import { formatPrice, guessPrimaryKey, createBem } from '../../shared/utils';
import { IColumnTypes, ITableTypes, recordedType, EnumsType, TagEnumsType, SupporttedColumnTypes } from './index.type';
import './index.less';

export const checkValValidated = ($val) => $val || $val === 0 || $val === false;
export const commonPaginationKeys = ['pagination', 'sorter', 'filters'];
export const typeValueRefers = {
  normal: (value: any) => (checkValValidated(value) ? value : '--'),
  number: (value: number) => (checkValValidated(value) ? value : '--'),
  price: (value: number) => formatPrice(value),
  date: (value: number) => formatUnixTime(value, 'YYYY/MM/DD'),
  datetime: (value: number) => formatUnixTime(value),
  enum: (value: number | string, enums?: TagEnumsType) => enums?.[value] || '--',
  ratio: (value: number) => getRatioFromNum(value, 2, true),
  tag: (value: string, enums?: EnumsType) => {
    const TagNode = <Tag color={enums?.[value]?.color}>{enums?.[value]?.text || '--'}</Tag>;
    return enums?.[value]?.desc ? (
      <Tooltip title={enums?.[value]?.desc} className={bem('tooltip')}>
        {TagNode}
      </Tooltip>
    ) : (
      TagNode
    );
  },
};

export const renderNode = (type: SupporttedColumnTypes, value: any, column: IColumnTypes<recordedType>) =>
  ['enum', 'tag'].includes(type) ? typeValueRefers[type || 'normal'](value, column?.enums as Record<string, any>) : typeValueRefers[type || 'normal'](value);

const bem = createBem('table');
export const formatColumns = ($columns: IColumnTypes<unknown>[]) =>
  $columns
    .filter((column) => !column.hidden)
    .map((column) => {
      const { type, ...others } = column;
      let { render } = column;
      if (!render) {
        render = (value) => renderNode(type as SupporttedColumnTypes, value, column);
      }
      return {
        type,
        render,
        ...others,
      };
    });

const InternalCommonTable = (props: ITableTypes<any>) => {
  const { columns = [], rowKey, pagination, cacheKey, ...others } = props;
  const { dispatch, payload } = useContext(KAContext);
  return (
    <Table
      {...others}
      rowKey={rowKey || guessPrimaryKey(columns) || 'id'}
      columns={formatColumns(columns)}
      pagination={payload?.pagination || pagination || false}
      onChange={(png, ...rests) => {
        const pageResults = omitProps(['showSizeChanger', 'showQuickJumper'], png);
        props.onChange?.(pageResults, ...rests);
        // TODO: keep-alive现在只支持table组件，按理说keep-alive应该
        // 是一个组件，可以包裹任何可受控组件，并且通过triggerEvent的事件
        // 触发更新缓存。
        if (cacheKey) {
          const [filters, sorter] = rests;
          //
          dispatch({ pagination: pageResults, filters, sorter });
        }
      }}
    />
  );
};

const CommonTable = (props: ITableTypes<any>) => {
  return (
    <ConfigProvider locale={zhCN}>
      {props?.cacheKey ? (
        <KeepAlive name={props.cacheKey} onCacheHitted={props.onCacheHitted}>
          <InternalCommonTable {...props} />
        </KeepAlive>
      ) : (
        <InternalCommonTable {...props} />
      )}
    </ConfigProvider>
  );
};

export default CommonTable;
