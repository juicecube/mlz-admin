import React, { useContext } from 'react';
import { Form, Input, Row, Col, InputNumber, Select, DatePicker } from 'antd';
import Button from '../../button';
import { ICommonSearch } from './index.type';
import { TagEnumsType, EnumsType } from '../../table/common-table/index.type';
import { commonPaginationKeys } from '../../table/common-table';
import { omitProps, purgeData } from 'mytils';
import locale from 'antd/es/date-picker/locale/zh_CN';
import Icon from '../../icon';
import { createBem } from '../../shared/utils';
import KeepAlive, { KAContext } from '../../shared/keep-alive';
import MDatePicker, { MDateRangePicker } from '../date-picker';
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
        <Select.Option value={key}>
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
  number: () => <InputNumber style={regularOptions.style} />,
  enum: ({ enums }) => renderSelection(enums),
  tag: ({ enums }) => renderSelection(enums),
  date: ({ searchItemProps }) => <MDatePicker picker="date" startOf="day" {...regularOptions} {...searchItemProps} />,
  datetime: ({ searchItemProps }) => <MDatePicker showtime {...regularOptions} {...searchItemProps} />,
  dateRange: ({ searchItemProps }) => <MDatePicker.RangePicker picker="date" startOf="day" {...regularOptions} {...searchItemProps} />,
  datetimeRange: ({ searchItemProps }) => <MDatePicker.RangePicker showTime {...regularOptions} {...searchItemProps} />,
  price: () => <InputNumber style={fullWidthStyle} />,
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

const calcTotalColspan = ($items, perColspan = 4) => $items.reduce((prev, curr) => (prev += curr.searchColSpan || perColspan), 0);

const InternalCommonSearch = (props: ICommonSearch<unknown>) => {
  const [form] = Form.useForm();
  const { columns = [], tools = [], operations = [], colCount = 4, cacheKey } = props;
  const searchings = columns?.filter((item) => item.searchable || item.searchable === 0).sort((prev, curr) => Number(curr?.['searchable']) - Number(prev?.['searchable']));
  const perColspan = 24 / colCount;
  const sparedLastColSpan = searchings ? 24 - (calcTotalColspan(searchings, perColspan) % 24) : perColspan;
  const shouldMergeSubmitButton = searchings && searchings?.length % colCount === 0;

  const { dispatch, payload } = useContext(KAContext);
  let keepAliveHandler;
  if (cacheKey) {
    keepAliveHandler = (fields) => dispatch(fields);
    form.setFieldsValue(payload ? omitProps(commonPaginationKeys, payload) : {});
  }

  const formSubmitters = (
    <Col span={sparedLastColSpan < perColspan ? 24 : sparedLastColSpan} style={{ textAlign: 'right', marginBottom: 16 }}>
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
  );

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
      style={tools.length ? { marginBottom: 18 } : {}}>
      <Row gutter={24}>
        {searchings?.map((row, index) => (
          <Col sm={row.searchColSpan || perColspan * 3} lg={row.searchColSpan || perColspan * 2} xl={row.searchColSpan || perColspan} key={(row.title as string) || index}>
            {renderCol(row)}
          </Col>
        ))}
        {shouldMergeSubmitButton ? null : formSubmitters}
      </Row>
      {shouldMergeSubmitButton ? <Row justify="end">{formSubmitters}</Row> : null}
      {tools?.length || operations?.length ? (
        <>
          <hr className={bem('hr')} />
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
const CommonSearchForm = (props: ICommonSearch<unknown>) =>
  props?.cacheKey ? (
    <KeepAlive name={props.cacheKey} onCacheHitted={props.onCacheHitted}>
      <InternalCommonSearch {...props} />
    </KeepAlive>
  ) : (
    <InternalCommonSearch {...props} />
  );
export default CommonSearchForm;
