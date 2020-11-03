/**
 * title: 基本使用
 * desc: 通过传入 `dataSource` 和`columns`来展示相关信息
 * background: '#F0F2F5'
 */
import React from 'react';
import { DetailCard, Tooltip } from '@mlz/admin';
import axios from 'axios';

const columnsForDetail = [
  {
    title: '订单ID',
    dataIndex: 'orderId',
  },
  {
    title: '售后单ID',
    dataIndex: 'id',
  },
  {
    title: '归属人',
    dataIndex: 'owner',
  },
  {
    title: '售后原因',
    dataIndex: 'reason',
    span: 2,
  },
  {
    title: '售后状态',
    dataIndex: 'status',
    render: () => (
      <Tooltip title="因为卖完了">
        <a type="primary">停售</a>
      </Tooltip>
    ),
  },
  {
    title: '申请时间',
    dataIndex: 'createdAt',
    type: 'datetime',
  },
];
const columnsForCustomer = [
  {
    title: '售后单ID',
    dataIndex: 'customerId',
    type: 'normal',
  },
  {
    title: '客户手机号',
    dataIndex: 'maskedPhonenumber',
    type: 'normal',
  },
  {
    title: '业务人员手机号',
    dataIndex: 'phoneNumber',
    render: (value) => <a>{value}</a>,
  },
];

class App extends React.PureComponent {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (params?: { current: number; pageSize: number }) => {
    const { data } = await axios.post('https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect', {
      url: 'http://rap2api.taobao.org/app/mock/252468/admini/detail-demo',
    });
    this.setState({
      data: data && JSON.parse(data),
    });
  };

  render() {
    return (
      <>
        <DetailCard title="基本信息" dataSource={this.state.data} columns={columnsForDetail} />
        <DetailCard title="客户信息" dataSource={this.state.data?.['customer']} columns={columnsForCustomer} />
      </>
    );
  }
}

export default App;
