/**
 * title: 根据依赖动态渲染表单块
 * desc: 通过`relyOn`属性设置多组 期望/实际值，当满足期望时动态更新表单。
 */
import React from 'react';
import { Form, Input, InputNumber, DatePicker, Select } from '@mlz/admin';
import * as moment from 'moment';

const normalStyle = { width: '100%' };
const columns = [
  {
    label: '群发内容',
    name: 'smsContent',
    itemProps: { rules: [{ required: true, message: '必须填写"群发内容"' }] },
    render: <Input.TextArea placeholder="输入'我爱你'试试" />,
  },
  {
    label: '支付方式',
    name: 'afford',
    itemProps: { rules: [{ required: true, message: '必须填写"短信数量"' }] },
    render: (
      <Select>
        <Select.Option value={1}>按投放效果付费</Select.Option>
        <Select.Option value={2}>先行付费</Select.Option>
      </Select>
    ),
    relyOn: [{ name: 'smsContent', toContain: ['我爱你'] }],
  },
  {
    label: '支付费用',
    name: 'cost',
    render: <InputNumber min={1} style={normalStyle} />,
    itemProps: { rules: [{ required: true, message: '必须填写"短信数量"' }], tooltip: '根据具体情况动态展示' },
    relyOn: [{ name: 'afford', toContain: [2] }],
  },
  {
    label: '费用日期',
    name: 'costPeriod',
    itemProps: { rules: [{ required: true, message: '必须填写"费用日期"' }] },
    render: () => <DatePicker mode="date" disabledDate={(current: moment.Moment) => current && current <= moment().startOf('day')} style={normalStyle} />,
  },
];

export default () => {
  return <Form.Block columns={columns} style={{ padding: '0 180px' }} />;
};
