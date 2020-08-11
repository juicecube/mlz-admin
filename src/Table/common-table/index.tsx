import React, { useState, useContext } from 'react';
import { Table, Tooltip, Tag, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import KeepAlive from '../../shared/keep-alive';
import { formatUnixTime, omitProps, getRatioFromNum } from 'mytils';
import { formatPrice, guessPrimaryKey, createBem } from '../../shared/utils';
import { IColumnTypes, ITableTypes, recordedType, EnumsType, TagEnumsType, SupporttedColumnTypes } from './index.type';
import './index.less';

export const checkValValidated = ($val) => $val || $val === 0;
export const typeValueRefers = {
  normal: (value: any) => (checkValValidated(value) ? value : '--'),
  number: (value: number) => (checkValValidated(value) ? value : '--'),
  price: (value: number) => formatPrice(value),
  date: (value: number) => formatUnixTime(value, 'YYYY/MM/DD'),
  datetime: (value: number) => formatUnixTime(value),
  enum: (value: number | string, enums?: TagEnumsType) => enums?.[value] || '--',
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
  ratio: (value: number) => getRatioFromNum(value, 2, true),
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
  const { columns = [], pagination, rowKey, ...others } = props;
  return (
    <Table
      {...others}
      rowKey={rowKey || (columns.length > 0 ? guessPrimaryKey(columns) : null) || 'id'}
      columns={formatColumns(columns)}
      pagination={pagination || false}
      onChange={(png, ...rests) => {
        props.onChange?.(omitProps(['showSizeChanger', 'showQuickJumper'], png), ...rests);
      }}
    />
  );
};

const CommonTable = (props: ITableTypes<any>) => {
  return (
    <ConfigProvider locale={zhCN}>
      {props?.keepAlive ? (
        <KeepAlive name={props.keepAlive as string}>
          <InternalCommonTable {...props} />
        </KeepAlive>
      ) : (
        <InternalCommonTable {...props} />
      )}
    </ConfigProvider>
  );
};

export default CommonTable;
