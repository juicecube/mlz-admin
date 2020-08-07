import React from 'react';
import { Form, Input, Row, Col, InputNumber, Select, DatePicker } from 'antd';
import Button from '../../Button/Button';
import { ICommonSearch } from './index.type';
import { TagEnumsType, EnumsType } from '../../Table/common-table/index.type';
import { getDataType } from 'mytils';
import locale from 'antd/es/date-picker/locale/zh_CN';
import Icon from '../../Icon/Icon';
import { createBem, purgeData } from '../../shared/utils';
import './index.less';

const bem = createBem('common-search');
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
  datetimeRange: () => <DatePicker.RangePicker style={fullWidthStyle} locale={locale} showTime />,
  price: () => <InputNumber style={fullWidthStyle} />,
  ratio: () => <InputNumber formatter={(value) => `${value ? value + ' %' : ''}`} parser={(value) => value?.replace(' %', '') as string} style={fullWidthStyle} />,
};

const renderCol = ($column) => {
  const { title, dataIndex, searchLabel, type, enums, searchType, searchKey } = $column;
  return (
    <Form.Item name={searchKey || dataIndex} label={searchLabel || title} key={$column.dataIndex} preserve={false}>
      {$column.searchRender?.() || typeFormItemRefers[searchType || type || 'normal']?.(enums || undefined)}
    </Form.Item>
  );
};

const calcTotalColspan = ($items, perColspan = 4) => $items.reduce((prev, curr) => (prev += curr.searchColSpan || perColspan), 0);
const CommonSearchForm = (props: ICommonSearch<unknown>) => {
  const [form] = Form.useForm();
  const { columns = [], tools = [], colCount = 4 } = props;
  const toolsArr = (getDataType(tools) === 'array' ? tools : [tools]) as React.ReactNode[];
  const searchings = columns?.filter((item) => item.searchable || item.searchable === 0).sort((prev, curr) => Number(curr?.['searchable']) - Number(prev?.['searchable']));
  const perColspan = 24 / colCount;
  const sparedLastColSpan = searchings ? 24 - (calcTotalColspan(searchings, perColspan) % 24) : perColspan;
  const shouldMergeSubmitButton = searchings && searchings?.length % colCount === 0;
  const formSubmitters = (
    <Col span={sparedLastColSpan < perColspan ? 24 : sparedLastColSpan} style={{ textAlign: 'right' }}>
      <Button
        style={{ marginRight: 12 }}
        onClick={(e): void & React.MouseEventHandler<HTMLElement> => {
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
      onFinish={(params) => props.onSearch?.(purgeData(params))}
      onFinishFailed={props?.onSearchFailed}
      initialValues={props.initialSearchValues}
      style={toolsArr.length ? { marginBottom: 18 } : {}}>
      <Row gutter={24}>
        {searchings?.map((row, index) => (
          <Col sm={row.searchColSpan || perColspan * 3} lg={row.searchColSpan || perColspan * 2} xl={row.searchColSpan || perColspan} key={(row.title as string) || index}>
            {renderCol(row)}
          </Col>
        ))}
        {shouldMergeSubmitButton ? null : formSubmitters}
      </Row>
      {shouldMergeSubmitButton ? (
        <Row justify="end" style={{ marginBottom: 16 }}>
          {formSubmitters}
        </Row>
      ) : null}
      {toolsArr && (toolsArr as React.ReactNode[])?.length > 0 ? (
        <>
          <hr className={bem('hr')} />
          <Row justify="end" align="middle" gutter={16}>
            {toolsArr.map((tool, index) => (
              <Col key={tool?.['key'] || index}>{tool}</Col>
            ))}
          </Row>
        </>
      ) : null}
    </Form>
  );
};
export default CommonSearchForm;
