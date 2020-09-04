import React from 'react';
import { Layout } from 'antd';
import CommonTable, { formatColumns } from './common-table';
import CommonSearchForm from './common-search';
import { ITableTypes } from './common-table/index.type';

const InteralTable = (props: ITableTypes<any>) => {
  const { columns = [] } = props;
  const formattedColumns = formatColumns(columns);
  return (
    <Layout.Content>
      {formattedColumns.some((item) => item.searchable) ? <CommonSearchForm {...props} colCount={4} /> : null}
      <CommonTable {...props} columns={formattedColumns} />
    </Layout.Content>
  );
};
const Table = InteralTable;

export default Table;
