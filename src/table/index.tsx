import React from 'react';
import { Layout } from 'antd';
import CommonTable, { formatColumns } from './common-table';
import CommonSearchForm from './common-search';
import { ITableTypes } from './common-table/index.type';

const InteralTable = (props: ITableTypes<any>) => {
  const { columns = [], tools = [], operations = [] } = props;
  const formattedColumns = formatColumns(columns);
  return (
    <Layout.Content>
      {tools.length || operations.length || formattedColumns.some((item) => item.searchable) ? <CommonSearchForm {...props} colCount={4} /> : null}
      <CommonTable {...props} columns={formattedColumns} />
    </Layout.Content>
  );
};
export default InteralTable;
