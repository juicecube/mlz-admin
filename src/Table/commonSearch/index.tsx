import React from 'react';
import { Form, Input, Row, Col, InputNumber, Select, DatePicker } from 'antd';
import Button from '@/Button/Button';
import { ICommonSearch } from './index.type';
import { TagEnumsType, EnumsType } from '@/Table/commonTable/index.type';
import * as moment from 'moment';
import { getDataType } from 'mytils';
import locale from 'antd/es/date-picker/locale/zh_CN';
import Icon from '@/Icon/Icon';
import { cloneDeep } from 'lodash-es';
import { createBem, purgeData } from '@/shared/utils';
import './index.less';

const bem = createBem('common-search');
const renderSelection = (opts: TagEnumsType | EnumsType) => (
  <Select>
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
  normal: () => <Input />,
  number: () => <InputNumber style={fullWidthStyle} />,
  enum: (opts) => renderSelection(opts),
  tag: (opts) => renderSelection(opts),
  date: () => <DatePicker style={fullWidthStyle} locale={locale} />,
  dateRange: () => <DatePicker.RangePicker style={fullWidthStyle} locale={locale} />,
  datetime: () => <DatePicker showTime style={fullWidthStyle} locale={locale} />,
  datetimeRange: () => <DatePicker.RangePicker style={fullWidthStyle} showTime locale={locale} />,
  price: () => <Input addonBefore="¥" />,
};

const renderCol = ($column) => {
  const { title, dataIndex, searchLabel, type, enums, searchType } = $column;
  return (
    <Form.Item name={dataIndex} label={searchLabel || title} key={$column.dataIndex}>
      {typeFormItemRefers[searchType || type]?.(enums || undefined) ?? <Input />}
    </Form.Item>
  );
};

const calcTotalColspan = ($items, colCount = 4) => {
  return $items.reduce((prev, curr) => (prev += curr.searchColSpan || 24 / colCount), 0);
};

const CommonSearchForm = (props: ICommonSearch<unknown>) => {
  const { columns, tools, colCount = 4 } = props;
  const [form] = Form.useForm();
  const searchings = columns?.filter((item) => item.searchable || item.searchable === 0).sort((prev, curr) => Number(curr.searchable) - Number(prev.searchable));
  const sparedLastColSpan = searchings ? 24 - (calcTotalColspan(searchings, colCount) % 24) : 24 / colCount;
  const shouldMergeSubmitButton = searchings && searchings?.length % colCount === 0;
  const formSubmitters = (
    <Col span={sparedLastColSpan} style={{ textAlign: 'right' }}>
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
        console.log(params);
        props.onSearch?.(purgeData(params));
      }}
      onFinishFailed={props?.onSearchFailed}
      initialValues={props.initialSearchValues}>
      <Row gutter={24}>
        {searchings?.map((row, index) => (
          <Col span={row.searchColSpan || 24 / colCount} key={(row.title as string) || index}>
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
