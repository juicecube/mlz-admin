import React, { useState, useContext } from 'react';
import { default as ConfigProvider } from 'antd/es/config-provider';
import { default as Tag } from 'antd/es/tag';
import Button from '@/Button/Button';
import zhCN from 'antd/es/locale/zh_CN';
import { ifPropertyExited, omitObject, guessPrimaryKey } from '@/shared/utils';
import ProTable from '@ant-design/pro-table';
import { TableProps, ColumnTypes } from './Table.type';
import { ColorEnums } from './Table.constants';
import { cloneDeep } from 'lodash-es';
import '@ant-design/pro-table/es/index.less';
import './Table.less';

import KeepAlive, { KAContext } from '@/shared/components/keep-alive';

//
const resetDefault = (props: TableProps, cols: any[]): Omit<TableProps, 'data'> => {
  return {
    options: props.options || false,
    headerTitle: props.headerTitle || false,
    size: props.size || 'middle',
    type: 'table',
    pagination: {
      showQuickJumper: true,
      size: props.size !== 'small' ? 'default' : 'small',
      showLessItems: true,
      pageSize: props.limit || 10,
      current: props.current || 1,
      total: props.total || props?.data?.length || 1,
    },
    rowKey: props.rowKey || guessPrimaryKey(cols),
    search: ifShowSearch(cols) ? resetSearchDefault(props) : false,
    columns: resetDefaultColumns(cols),
  };
};

//
const resetSearchDefault = (props: TableProps) => {
  return {
    collapsed: false,
    optionRender: (searchConf: any, e: any) => {
      return (
        <>
          <Button
            type="primary"
            onClick={() => {
              const { onSearch } = props;
              const searchParams = e.form.getFieldsValue();
              onSearch && onSearch(searchParams);
            }}>
            {searchConf.searchText}
          </Button>{' '}
          <Button
            onClick={() => {
              e.form.resetFields();
              const { onSearchReset, onSearch } = props;
              onSearchReset && onSearchReset();
              // reset也要触发onSearch
              const searchParams = e.form.getFieldsValue();
              onSearch && onSearch(searchParams);
            }}>
            {searchConf.resetText}
          </Button>{' '}
        </>
      );
    },
  };
};

//
const resetDefaultColumns = (columns: ColumnTypes[]) => {
  if (!columns) {
    return [];
  }
  // traverse + shallow clone is enough
  columns.forEach((item) => {
    // 增加对tag功能
    if (ifPropertyExited('valueEnum', item) && ifPropertyExited('dataIndex', item)) {
      if (item.valueType === 'tag') {
        item.render = (_, row: Record<string, any>) => {
          const theExactValueObj = item.valueEnum && item?.valueEnum[row[item.dataIndex || 'default']];
          return <Tag color={(ColorEnums as { [key: string]: string })[theExactValueObj?.status.toLowerCase() || 'default']}>{theExactValueObj?.text || '未知状态'}</Tag>;
        };
      }
    }
    // 指定key
    item.key = item.key || item.dataIndex;
    item.filters = item.filters || [];
  });
  return columns;
};

// 判断是否需要展示search
const ifShowSearch = (columns: ColumnTypes[]) => {
  return (
    // Arary.some() will terminated half a way
    columns
      ? columns?.filter((item) => {
          // TODO❗️side effects
          item.hideInSearch = !item.searchable;
          item.order = item.order || (typeof item.searchable === 'number' ? item.searchable : 1);
          return item.searchable;
        })?.length > 0
      : false
  );
};

const omittedProps = ($props: TableProps, cols: ColumnTypes[]) => {
  return {
    dataSource: $props.data || [],
    // 干掉data属性，使用dataSource注入
    ...omitObject($props, 'data'),
    // 覆盖默认值
    ...resetDefault($props, cols || []),
  };
};
/**
 * @component Table 📦
 * @description 通过data填充数据，columns渲染展示
 */
// TODO: 暂时不支持url非受控模式
// function Table(props: CTs.OmittedSuperPropsTypes['url']): React.ReactElement;
// function Table(props: CTs.OmittedSuperPropsTypes['data']): React.ReactElement;
function Table(props: TableProps): React.ReactElement {
  const cols = cloneDeep(props.columns);
  return (
    <div className="table-wrapper">
      <ConfigProvider locale={zhCN}>
        {props.keepAlive ? (
          <KeepAlive name={props.keepAlive} props={props}>
            <AlivableProTable props={props} />
          </KeepAlive>
        ) : (
          CommonTable(props, cols)
        )}
      </ConfigProvider>
    </div>
  );
}
const AlivableProTable = ($props: { props: TableProps }): React.ReactElement => {
  const { props } = $props;
  const contextValue = useContext<any>(KAContext);
  const cols = cloneDeep(props.columns);
  const propsKeeped = Object.assign({}, props, contextValue?.payload || {});
  return CommonTable(propsKeeped, cols, (contextValue as any)?.dispatch);
};

const CommonTable = (props: TableProps, cols: ColumnTypes[], aliveTrigger?: (keepAliveName: string | undefined, payload: any) => void) => {
  return (
    <ProTable
      {...(omittedProps(props, cols) as any)}
      toolBarRender={props.toolBarRender || false}
      rowClassName="admini-table-row"
      onChange={(e) => {
        const { current, pageSize } = e;
        const { onChange } = props;
        onChange &&
          onChange({
            current,
            limit: pageSize,
          });
        aliveTrigger?.(props?.keepAlive, {
          current,
          limit: pageSize,
        });
      }}
    />
  );
};

export default Table;
