/**
 * title: 初始值
 * desc: 通过`initialValues`属性设置初始值。
 */
import React from 'react';
import { Form, Input, InputNumber, DatePicker, Select, Checkbox } from '@mlz/admin';
import axios from 'axios';
import moment from 'moment';

const normalStyle = { width: '100%' };
const columns = [
  {
    label: '姓名',
    name: 'name',
    itemProps: { rules: [{ required: true, message: '必须填写"群发内容"' }] },
    render: <Input />,
  },
  {
    label: '性别',
    name: 'gender',
    itemProps: { rules: [{ required: true, message: '必须填写"群发内容"' }] },
    render: (
      <Select>
        <Select.Option value={1}>男</Select.Option>
        <Select.Option value={0}>女</Select.Option>
      </Select>
    ),
  },
  {
    label: '单身',
    name: 'single',
    render: <Checkbox>嗯</Checkbox>,
    itemProps: { valuePropName: 'checked' },
    relyOn: [{ name: 'gender', toContain: [0] }],
  },
  {
    label: '年龄',
    name: 'age',
    render: <InputNumber min={1} style={normalStyle} />,
  },
  {
    label: '入职时间',
    name: 'time',
    render: () => <DatePicker mode="date" style={normalStyle} />,
  },
];

class App extends React.Component {
  state = {
    data: {},
    loading: true,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { data } = await axios.post('https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect', {
      url: 'http://rap2api.taobao.org/app/mock/252468/admini/form-demo',
    });
    const newData = data ? JSON.parse(data).client : { client: {}, updated_at: 0 };
    newData.time = moment(newData.updated_at * 1000);
    this.setState({
      data: newData,
      loading: false,
    });
  }

  render() {
    return <Form.Block columns={columns} initialValues={this.state.data} loading={this.state.loading} style={{ padding: '0 180px' }} onFinish={(e) => console.log(e)} />;
  }
}

export default App;
