import React, { useState, useContext } from 'react';
import { Table, Tooltip, Tag, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { formatUnixTime } from 'mytils';
import { formatPrice, guessPrimaryKey, createBem } from '@/shared/utils';
import { IColumnTypes, ITableTypes, recordedType, EnumsType, TagEnumsType, SupporttedColumnTypes } from './index.type';
import './index.less';

export const typeValueRefers = {
  normal: (value: any) => value || '--',
  number: (value: number) => value || '--',
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
};

const renderNode = (type: SupporttedColumnTypes = 'normal', value: any, column: IColumnTypes<recordedType>) => {
  return ['enum', 'tag'].includes(type) ? typeValueRefers[type](value, column?.enums as Record<string, any>) : typeValueRefers[type](value);
};

const bem = createBem('table');
export const formatColumns = ($columns: IColumnTypes<any>[]) => {
  return $columns.map((column) => {
    const { type, ...others } = column;
    let { render } = column;
    if (!render) {
      render = (value) => renderNode(type as SupporttedColumnTypes, value, column);
    }
    return {
      ...others,
      type,
      render,
    };
  });
};

const CommonTable = (props: ITableTypes<any>) => {
  const { columns = [], pagination, rowKey, ...others } = props;
  return (
    <ConfigProvider locale={zhCN}>
      <Table
        rowKey={rowKey || (columns.length > 0 ? guessPrimaryKey(columns) : null) || 'id'}
        columns={columns}
        pagination={pagination || false}
        onChange={(e) => {
          console.log(e, 1);
        }}
        {...others}
      />
    </ConfigProvider>
  );
};

export default CommonTable;
