import React, { useContext } from 'react';
import { ConfigProvider, Button, Tag } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { ifPropertyExited, omitObject, guessPrimaryKey } from '@/shared/utils';
import ProTable from '@ant-design/pro-table';
import { ColorEnums } from './Table.constants';
import './Table.less';
import { cloneDeep } from 'lodash-es';
import KeepAlive, { KAContext } from '@/shared/components/keep-alive';
const resetDefault = (props, cols) => {
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
      total: props.total || props.data.length,
    },
    rowKey: props.rowKey || guessPrimaryKey(cols),
    search: ifShowSearch(cols) ? resetSearchDefault(props) : false,
    columns: resetDefaultColumns(cols),
  };
};
const resetSearchDefault = (props) => {
  return {
    collapsed: false,
    optionRender: (searchConf, e) => {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          Button,
          {
            type: 'primary',
            onClick: () => {
              const { onSearch } = props;
              const searchParams = e.form.getFieldsValue();
              onSearch && onSearch(searchParams);
            },
          },
          searchConf.searchText,
        ),
        ' ',
        React.createElement(
          Button,
          {
            onClick: () => {
              e.form.resetFields();
              const { onSearchReset } = props;
              onSearchReset && onSearchReset();
            },
          },
          searchConf.resetText,
        ),
        ' ',
      );
    },
  };
};
const resetDefaultColumns = (columns) => {
  columns.forEach((item) => {
    if (ifPropertyExited('valueEnum', item) && ifPropertyExited('dataIndex', item)) {
      if (item.valueType === 'tag') {
        item.render = (_, row) => {
          const theExactValueObj = item.valueEnum && item?.valueEnum[row[item.dataIndex || 'default']];
          return React.createElement(Tag, { color: ColorEnums[theExactValueObj?.status.toLowerCase() || 'default'] }, theExactValueObj?.text || '未知状态');
        };
      }
    }
    item.key = item.key || item.dataIndex;
    item.filters = item.filters || [];
  });
  return columns;
};
const ifShowSearch = (columns) => {
  return (
    columns?.filter((item) => {
      item.hideInSearch = !item.searchable;
      item.order = item.order || (typeof item.searchable === 'number' ? item.searchable : 1);
      return item.searchable;
    }).length > 0
  );
};
const omittedProps = ($props, cols) => {
  return {
    dataSource: $props.data,
    ...omitObject($props, 'data'),
    ...resetDefault($props, cols),
  };
};
function Table(props) {
  const cols = cloneDeep(props.columns);
  return React.createElement(
    'div',
    { className: 'table-wrapper' },
    React.createElement(
      ConfigProvider,
      { locale: zhCN },
      props.keepAlive ? React.createElement(KeepAlive, { name: props.keepAlive, props: props }, React.createElement(AlivableProTable, { props: props })) : CommonTable(props, cols),
    ),
  );
}
const AlivableProTable = ($props) => {
  const { props } = $props;
  const contextValue = useContext(KAContext);
  const cols = cloneDeep(props.columns);
  const propsKeeped = Object.assign({}, props, contextValue?.payload || {});
  return CommonTable(propsKeeped, cols, contextValue?.dispatch);
};
const CommonTable = (props, cols, aliveTrigger) => {
  return React.createElement(
    ProTable,
    Object.assign({}, omittedProps(props, cols), {
      toolBarRender: props.toolBarRender || false,
      rowClassName: 'admini-table-row',
      onChange: (e) => {
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
      },
    }),
  );
};
export default Table;
//# sourceMappingURL=Table.js.map
