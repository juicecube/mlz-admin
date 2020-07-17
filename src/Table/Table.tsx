import React, { useState, useContext } from 'react';
import { Layout } from 'antd';
import CommonTable, { formatColumns } from './common-table';
import CommonSearchForm from './common-search';
import { ITableTypes } from './common-table/index.type';

const InteralTable = (props: ITableTypes<any>) => {
  const formattedColumns = formatColumns(props.columns);
  const showSearchForm = formattedColumns.some((item) => item.searchable);
  return (
    <Layout.Content>
      {showSearchForm ? <CommonSearchForm {...props} columns={formattedColumns} colCount={4} tools={props.tools} /> : null}
      <CommonTable {...props} columns={formattedColumns} />
    </Layout.Content>
  );
};
const Table = InteralTable;

export default Table;
