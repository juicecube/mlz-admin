import React from 'react';
import { Form, Input, Row, Col, InputNumber, Select, DatePicker } from 'antd';
import Button from '@/Button/Button';
import { ICommonSearch } from './index.type';
import { TagEnumsType, EnumsType } from '@/Table/common-table/index.type';
import locale from 'antd/es/date-picker/locale/zh_CN';
import Icon from '@/Icon/Icon';
import { createBem, purgeData } from '@/shared/utils';
import './index.less';

const bem = createBem('common-search');
const renderSelection = (opts: TagEnumsType | EnumsType) => (
  <Select allowClear>
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
 * @REFLECTs type|searchType映射到组件
 */
const fullWidthStyle = { width: '100%' };
export const typeFormItemRefers = {
  normal: () => <Input allowClear />,
  number: () => <InputNumber style={fullWidthStyle} />,
  enum: (opts) => renderSelection(opts),
  tag: (opts) => renderSelection(opts),
  date: () => <DatePicker style={fullWidthStyle} locale={locale} allowClear />,
  dateRange: () => <DatePicker.RangePicker style={fullWidthStyle} locale={locale} allowClear />,
  datetime: () => <DatePicker showTime style={fullWidthStyle} locale={locale} allowClear />,
  datetimeRange: () => <DatePicker.RangePicker style={fullWidthStyle} locale={locale} showTime allowClear />,
  price: () => <InputNumber style={fullWidthStyle} />,
  ratio: () => <InputNumber formatter={(value) => `${value ? value + ' %' : ''}`} parser={(value) => value?.replace(' %', '') as string} style={fullWidthStyle} />,
};

const renderCol = ($column) => {
  const { title, dataIndex, searchLabel, type, enums, searchType } = $column;
  return (
    <Form.Item name={dataIndex} label={searchLabel || title} key={$column.dataIndex}>
      {typeFormItemRefers[searchType || type]?.(enums || undefined) ?? <Input allowClear />}
    </Form.Item>
  );
};

const calcTotalColspan = ($items, perColspan = 4) => $items.reduce((prev, curr) => (prev += curr.searchColSpan || perColspan), 0);
const CommonSearchForm = (props: ICommonSearch<unknown>) => {
  const { columns, tools, colCount = 4 } = props;
  const [form] = Form.useForm();
  const searchings = columns?.filter((item) => item.searchable || item.searchable === 0).sort((prev, curr) => Number(curr.searchable) - Number(prev.searchable));
  const perColspan = 24 / colCount;
  const sparedLastColSpan = searchings ? 24 - (calcTotalColspan(searchings, perColspan) % 24) : perColspan;
  const shouldMergeSubmitButton = searchings && searchings?.length % colCount === 0;
  const formSubmitters = (
    <Col span={sparedLastColSpan < perColspan ? 24 : sparedLastColSpan} style={{ textAlign: 'right' }}>
      <Button
        style={{ marginRight: 12 }}
        onClick={(e) => {
          props.onReset?.(undefined);
          form.resetFields();
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
        props.onSearch?.(purgeData(params));
      }}
      onFinishFailed={props?.onSearchFailed}
      initialValues={props.initialSearchValues}>
      <Row gutter={24}>
        {searchings?.map((row, index) => (
          <Col span={row.searchColSpan || perColspan} key={(row.title as string) || index}>
            {renderCol(row)}
          </Col>
        ))}
        {shouldMergeSubmitButton ? null : formSubmitters}
      </Row>
      {shouldMergeSubmitButton ? <Row justify="end">{formSubmitters}</Row> : null}
      {tools && tools?.length > 0 ? (
        <>
          <hr className={bem('hr')} />
          <Row justify="end" align="middle" gutter={16}>
            {tools.map((tool, index) => {
              return <Col key={index}>{tool}</Col>;
            })}
          </Row>
        </>
      ) : null}
    </Form>
  );
};
export default CommonSearchForm;
