import React from 'react';
import { Form, Input, Row, Col, InputNumber, Select, DatePicker } from 'antd';
import Button from '@/Button/Button';
import { ICommonSearch, IToolProps } from './index.type';
import { TagEnumsType, EnumsType } from '@/Table/commonTable/index.type';
import locale from 'antd/es/date-picker/locale/zh_CN';
import Icon from '@/Icon/Icon';
import { createBem } from '@/shared/utils';
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

export const typeFormItemRefers = {
  normal: () => <Input />,
  number: () => <InputNumber style={{ width: '100%' }} />,
  enum: (opts) => renderSelection(opts),
  tag: (opts) => renderSelection(opts),
  date: () => <DatePicker style={{ width: '100%' }} locale={locale} />,
  datetime: () => <DatePicker showTime style={{ width: '100%' }} locale={locale} />,
  price: () => <Input addonBefore="¥" />,
};

const renderCol = ($column) => {
  const { title, dataIndex, searchLabel, type, enums } = $column;
  return (
    <Form.Item name={title || dataIndex} label={searchLabel || title} key={$column.dataIndex}>
      {typeFormItemRefers[type]?.(enums || undefined) ?? <Input />}
    </Form.Item>
  );
};

const CommonSearchForm = (props: ICommonSearch<unknown>) => {
  const { columns, tools, colCount = 4 } = props;
  const searchings = columns?.filter((item) => item.searchable || item.searchable === 0);
  const sparedLastColSpan = searchings ? 24 - (searchings.length % colCount) * (24 / colCount) : colCount;
  const shouldMergeSubmitButton = searchings && searchings?.length % colCount === 0;
  return (
    <Form className={bem('form')}>
      <Row gutter={24}>
        {searchings?.map((row, index) => {
          return (
            <Col span={24 / (colCount || 4)} key={(row.title as string) || index}>
              {renderCol(row)}
            </Col>
          );
        })}
        {shouldMergeSubmitButton ? null : (
          <Col span={sparedLastColSpan} style={{ textAlign: 'right' }}>
            <Button icon={<Icon type="search_l" />} type="primary">
              查询
            </Button>
          </Col>
        )}
      </Row>
      {shouldMergeSubmitButton ? (
        <Row justify="end">
          <Col>
            <Button icon={<Icon type="search_l" />} type="primary">
              查询
            </Button>
          </Col>
        </Row>
      ) : null}
      {tools && tools?.length > 0 ? (
        <>
          <hr className={bem('hr')} />
          <Row justify="end" align="middle" gutter={16}>
            {tools.map((tool, index) => {
              return <Col key={tool?.key || index}>{tool}</Col>;
            })}
          </Row>
        </>
      ) : null}
    </Form>
  );
};
export default CommonSearchForm;
