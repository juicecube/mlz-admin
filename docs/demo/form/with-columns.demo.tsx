import React from 'react';
import { Form, Button, Input, InputNumber, DatePicker } from '@mlz/admin';
import * as moment from 'moment';

const normalStyle = { width: '100%' };
const columns = [
  {
    label: '群发内容',
    name: 'smsContent',
    itemProps: { rules: [{ required: true, message: '必须填写"群发内容"' }] },
    render: <Input.TextArea />,
  },
  {
    label: '短信数量',
    name: 'smsNum',
    render: <InputNumber min={1} style={normalStyle} />,
    itemProps: { rules: [{ required: true, message: '必须填写"短信数量"' }], style: { marginTop: 50 }, tooltip: '自定义了marginTop: 50的样式' },
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
