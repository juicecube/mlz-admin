import React, { useState, useContext } from 'react';
import { Layout } from 'antd';
import CommonTable, { formatColumns } from './commonTable';
import CommonSearchForm from './commonSearch';
import { ITableTypes } from './commonTable/index.type';

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
