import React, { useMemo, memo } from 'react';
import CommonTable, { formatColumns } from './common-table';
import CommonSearchForm from './common-search';
import { ITableTypes } from './common-table/index.type';
import './index.less';

const InteralTable = memo((props: ITableTypes<any>) => {
  const { columns = [], tools = [], operations = [], searchFormProps = {} } = props;
  const formattedColumns = useMemo(() => formatColumns(columns), [columns]);
  return (
    <>
      {tools.length || operations.length || formattedColumns.some((item) => item.searchable) ? <CommonSearchForm {...props} {...searchFormProps} colCount={4} /> : null}
      <CommonTable {...props} columns={formattedColumns} />
    </>
  );
});
export default InteralTable;
