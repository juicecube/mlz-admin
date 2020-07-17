/**
 * title: 基本使用
 * desc: 通过传入 `dataSource` 和`columns`来展示相关信息
 * background: '#F0F2F5'
 */
import React from 'react';
import DetailCard from '@/DetailCard/DetailCard';
import { typeValueRefers } from '@/Table/commonTable/index';
import axios from 'axios';
import { message, Tooltip } from 'antd';

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
    wrap: true,
  },
  {
    title: '售后状态',
    dataIndex: 'status',
    render: (text) => (
      <Tooltip title={text}>
        <a type="primary">摸我</a>
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
    render: (value) => {
      return <a onClick={() => message.info(value)}>{value}</a>;
    },
  },
];

const columnsForSkus = [
  {
    title: 'sku编码',
    dataIndex: 'skuNumber',
    width: 140,
  },
  {
    title: '发货单元名称',
    dataIndex: 'materialName',
  },
  {
    title: 'business编号',
    dataIndex: 'businessCode',
  },
  {
    title: '分摊比例',
    dataIndex: 'ratio',
    type: 'ratio',
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
    this.setState({ loading: true });
    const { data } = await axios.get('http://rap2.taobao.org:38080/app/mock/252468/admini/detail-demo');
    this.setState({
      data,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <DetailCard title="基本信息" dataSource={this.state.data} columns={columnsForDetail} />
        <DetailCard title="客户信息" dataSource={this.state.data['customer']} columns={columnsForCustomer} />
        <DetailCard title="发货详情" displayType="table" dataSource={this.state.data['skus']} columns={columnsForSkus} />
      </>
    );
  }
}

export default App;
