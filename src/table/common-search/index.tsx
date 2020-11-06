import React, { useContext, useState } from 'react';
import { Form, Input, Row, Col, InputNumber, Select } from 'antd';
import Button from '../../button';
import DatePicker from '../../date-picker';
import { ICommonSearch } from './index.type';
import { TagEnumsType, EnumsType } from '../../table/common-table/index.type';
import { commonPaginationKeys } from '../../table/common-table';
import { omitProps, purgeData } from 'mytils';
import locale from 'antd/es/date-picker/locale/zh_CN';
import Icon from '../../icon';
import { createBem } from '../../shared/utils';
import KeepAlive, { KAContext } from '../../shared/keep-alive';
import './index.less';

const fullWidthStyle = { width: '100%' } as const;
const bem = createBem('common-search');

/**
 * @func 根据column.enums生成对应的Select
 */
const renderSelection = (opts: TagEnumsType | EnumsType) => (
  <Select allowClear placeholder="请选择">
    {Object.entries(opts).map((kv) => {
      const [key, value] = kv;
      const text = typeof value === 'string' ? value : value.text;
      return (
        <Select.Option value={key} key={key}>
          {value.color ? (
            <div
              className={bem('form__select__tag')}
              style={{
                backgroundColor: value.color,
              }}
            />
          ) : null}
          {text}
        </Select.Option>
      );
    })}
  </Select>
);

/**
 * @func 根据column.type渲染对应的组件
 * @remark common-table的typeRender和common-search的typeRender不互相复用
 */
const regularOptions = {
  style: fullWidthStyle,
  locale,
};
export const typeFormItemRefers = {
  normal: () => <Input />,
  number: () => <InputNumber style={fullWidthStyle} />,
  enum: ({ enums }) => renderSelection(enums),
  tag: ({ enums }) => renderSelection(enums),
  date: ({ searchItemProps }) => <DatePicker {...regularOptions} {...searchItemProps} />,
  datetime: ({ searchItemProps }) => <DatePicker showTime {...regularOptions} {...searchItemProps} />,
  dateRange: ({ searchItemProps }) => <DatePicker.RangePicker {...regularOptions} {...searchItemProps} />,
  datetimeRange: ({ searchItemProps }) => <DatePicker.RangePicker showTime {...regularOptions} {...searchItemProps} />,
  price: () => <InputNumber style={fullWidthStyle} formatter={(value) => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} parser={(value: any) => value.replace(/¥\s?|(,*)/g, '')} min={0} />,
  ratio: () => <InputNumber formatter={(value) => `${value ? value + ' %' : ''}`} parser={(value) => value?.replace(' %', '') as string} style={fullWidthStyle} />,
};

/**
 * @func 根据column.search[xx]字段渲染对应的搜索组件
 */
const renderCol = ($column) => {
  const { title, dataIndex, searchLabel, type, enums, searchType, searchKey } = $column;
  return (
    <Form.Item name={searchKey || dataIndex} label={searchLabel || title} key={$column.dataIndex}>
      {$column.searchRender?.() || typeFormItemRefers[searchType || type || 'normal']?.($column)}
    </Form.Item>
  );
};

const calcTotalColspan = ($items, perColspan) => $items.reduce((prev, curr) => (prev += curr.searchColSpan || perColspan), 0);

const InternalCommonSearch = (props: ICommonSearch<unknown>) => {
  const [form] = Form.useForm();
  const { columns = [], tools = [], operations = [], colCount = 4, cacheKey } = props;
  const searchCollapsedThreshold = Number(props.searchCollapsedThreshold);
  const searchings = columns?.filter((item) => item.searchable || item.searchable === 0).sort((prev, curr) => Number(curr?.['searchable']) - Number(prev?.['searchable']));
  const perColspan = 24 / colCount;
  const collapsingButtonColspan = 2;
  const sparedColSpan = searchings?.length
    ? 24 -
      (calcTotalColspan(
        searchings.filter((_, index: number) => {
          return index < searchCollapsedThreshold;
        }),
        perColspan,
      ) %
        24)
    : perColspan + collapsingButtonColspan;
  const shouldMergeSubmitButton = searchings?.length % colCount === 0;
  const hasMoreInteractionArea = tools.length || operations.length;

  const { dispatch, payload } = useContext(KAContext);
  let keepAliveHandler;
  if (cacheKey) {
    keepAliveHandler = (fields) => dispatch(fields);
    form.setFieldsValue(payload ? omitProps(commonPaginationKeys, payload) : {});
  }

  const [collapsed, toggleCollapsed] = useState(false);
  const collapsedHandler = () => toggleCollapsed(!collapsed);

  const formSubmitters = searchings.length ? (
    <Col span={sparedColSpan < perColspan + collapsingButtonColspan ? 24 : sparedColSpan} style={{ textAlign: 'right', marginBottom: hasMoreInteractionArea ? 16 : 0 }} flex="1">
      {searchCollapsedThreshold ? (
        <Button className="toggle-search-count-btn" type="link" icon={<Icon type="arrow_down" rotate={collapsed ? 0 : 180} />} onClick={collapsedHandler}>
          {collapsed ? '展开' : '收起'}
        </Button>
      ) : null}
      <Button
        style={{ marginRight: 12 }}
        onClick={(e): void & React.MouseEventHandler<HTMLElement> => {
          form.resetFields();
          const currFieldsValues = form.getFieldsValue();
          !!keepAliveHandler && keepAliveHandler(currFieldsValues);
          // ⚠️TODO: 建议不要再使用onReset了，后面会去掉。onReset只是一种特殊的onSearch
          props.onReset?.(currFieldsValues);
          props.onSearch?.(currFieldsValues);
        }}
        htmlType="button">
        重置
      </Button>
      <Button icon={<Icon type="search_l" />} type="primary" htmlType="submit">
        查询
      </Button>
    </Col>
  ) : null;

  return (
    <Form
      className={bem('form')}
      form={form}
      onFinish={(params) => {
        const results = purgeData(params);
        props.onSearch?.(results);
        !!keepAliveHandler && keepAliveHandler(results);
      }}
      onFinishFailed={props?.onSearchFailed}
      initialValues={props.initialSearchValues}
      style={
        !searchings.length && hasMoreInteractionArea
          ? {
              marginBottom: 0,
            }
          : {}
      }>
      <Row gutter={24}>
        {searchings?.map((row, index: number) => {
          return (
            <Col
              className={bem('search-item')}
              sm={row.searchColSpan || perColspan * 3}
              lg={row.searchColSpan || perColspan * 2}
              xl={row.searchColSpan || perColspan}
              key={(row.title as string) || index}
              style={{ display: index >= searchCollapsedThreshold && collapsed ? 'none' : 'block' }}>
              {renderCol(row)}
            </Col>
          );
        })}
        {shouldMergeSubmitButton ? null : formSubmitters}
      </Row>
      {shouldMergeSubmitButton ? <Row justify="end">{formSubmitters}</Row> : null}
      {hasMoreInteractionArea ? (
        <>
          <section className={bem('extra')}>
            <div className={`bar-area ${bem('operations-area')}`}>
              <Row justify="start" align="middle" gutter={16}>
                {operations.map((operation, index) => (
                  <Col key={operation?.['key'] || index}>{operation}</Col>
                ))}
              </Row>
            </div>
            <div className={`bar-area ${bem('tools-area')}`}>
              <Row justify="end" align="middle" gutter={16}>
                {tools.map((tool, index) => (
                  <Col key={tool?.['key'] || index}>{tool}</Col>
                ))}
              </Row>
            </div>
          </section>
        </>
      ) : null}
    </Form>
  );
};
const CommonSearchForm = (props: ICommonSearch<unknown>) => {
  return props?.cacheKey ? (
    <KeepAlive name={props.cacheKey} onCacheHitted={props.onCacheHitted}>
      <InternalCommonSearch {...props} />
    </KeepAlive>
  ) : (
    <InternalCommonSearch {...props} />
  );
};
export default CommonSearchForm;
