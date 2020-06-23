import React, { useState, useContext } from 'react';
import { Table, Tooltip, Tag } from 'antd';
import { formatUnixTime, getDataType } from 'mytils';
import { formatPrice } from '@/shared/utils';
import { IColumnTypes, ITableTypes, recordedType, EnumsType, TagEnumsType, SupporttedColumnTypes } from './index.type';
// import 'index.less';

export const typeFilter = {
  normal: (value: any) => value || '--',
  price: (value: number) => formatPrice(value),
  date: (value: number) => formatUnixTime(value, 'YYYY/MM/DD'),
  datetime: (value: number) => formatUnixTime(value),
  enum: (value: number | string, enums?: TagEnumsType) => enums?.[value] || '--',
  tag: (value: string, enums?: EnumsType) => {
    const TagNode = <Tag color={enums?.[value]?.color}>{enums?.[value]?.text || '--'}</Tag>;
    return enums?.[value]?.desc ? <Tooltip title={enums?.[value]?.desc}>{TagNode}</Tooltip> : TagNode;
  },
};

const renderNode = (type: SupporttedColumnTypes = 'normal', value: any, column: IColumnTypes<recordedType>) => {
  return ['enum', 'tag'].includes(type) ? typeFilter[type](value, column?.enums as Record<string, any>) : typeFilter[type](value);
};

const formatColumns = ($columns: IColumnTypes<any>[]) => {
  return $columns.map((column) => {
    const { type, ...others } = column;
    let { render } = column;
    if (!render) {
      render = (value) => renderNode(type as SupporttedColumnTypes, value, column);
    }
    return {
      ...others,
      render,
    };
  });
};

const CommonTable = (props: ITableTypes<any>) => {
  const { columns, pagination, rowKey = 'id', ...others } = props;
  return <Table rowKey={rowKey} columns={formatColumns(columns)} pagination={pagination || false} {...others} />;
};

export default CommonTable;
