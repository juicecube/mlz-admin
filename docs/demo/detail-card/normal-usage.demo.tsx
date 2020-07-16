/**
 * title: 基本使用
 * desc: 通过传入 `dataSource` 和`columns`来展示相关信息
 * background: '#F0F2F5'
 */
import React from 'react';
import DetailCard from '@/DetailCard/DetailCard';
import axios from 'axios';
import { message } from 'antd';

const columns = ['id', 'orderId', 'owner', 'reason'];
const columnsForCustomer = [
  {
    dataIndex: 'customerId',
  },
  {
    dataIndex: 'customerId',
    type: 'normal',
  },
  {
    dataIndex: 'maskedPhonenumber',
    type: 'normal',
  },
  {
    dataIndex: 'phoneNumber',
    render: (value) => {
      return <a onClick={() => message.error(value)}>{value}</a>;
    },
  },
];
const columnsForAftersales = [];
class App extends React.PureComponent {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (params?: { current: number; pageSize: number }) => {
    this.setState({ loading: true });
    const { data } = await axios.get('http://rap2.taobao.org:38080/app/mock/252468/admini/detail-demo');
    this.setState({
      data: data,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <DetailCard title="基本信息" dataSource={this.state.data} columns={columns} />
        <DetailCard title="客户信息" dataSource={this.state.data['customer']} columns={columnsForCustomer} />
      </>
    );
  }
}

export default App;
