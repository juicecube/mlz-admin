import React, { useState, useContext } from 'react';
import { Table } from 'antd';
import { PaginationProps } from 'antd/lib/pagination';
import { IColumnTypes, ITableTypes } from './index.type';

// const typeFilter = () => {};

// const genRenderNode = (value, column, record) => {
//   let { type = 'normal' } = column;
//   return type === 'encodedPhone' ? typeFilter.encodedPhone(value, record, column) : typeFilter[type](value, column);
// };

// const transformColumns = ($columns: IColumnTypes<unknown>[]) => {
//   return $columns.map((column) => {
//     let { render, ...others } = column;
//     if (!render) {
//       render = (value, record) => {
//         return genRenderNode(value, column, record);
//       };
//     }
//     return {
//       ...others,
//       render,
//     };
//   });
// };

// const BaseTable: React.FC<ITableTypes<unknown>> = (props: ITableTypes<unknown>) => {
//   const handlePageChange = (current: number, limit: number) => {
//     props.onPageChange?.({ current, limit });
//   };
//   const { dataSource, total, limit, current, loading = false, columns, pagination, rowKey = 'id', ...others } = props;
//   const transformedColumns = transformColumns(columns);
//   const paginationConfig: PaginationProps | false = pagination || false;
//   return <Table rowKey={rowKey} columns={transformedColumns} dataSource={dataSource} pagination={paginationConfig} loading={loading} {...others} />;
// };

// export default BaseTable;
