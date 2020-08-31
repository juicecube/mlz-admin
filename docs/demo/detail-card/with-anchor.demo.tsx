/**
 * title: 基本使用
 * desc: 通过传入 `dataSource` 和`columns`来展示相关信息
 * background: '#F0F2F5'
 */
import React from 'react';
import DetailCard from '@/detail-card';
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
    title: '申请时间',
    dataIndex: 'createdAt',
    type: 'datetime',
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
    const { data } = await axios.get('http://rap2.taobao.org:38080/app/mock/252468/admini/detail-demo');
    this.setState({ data });
  };

  render() {
    return (
      <>
        <DetailCard title="锚点标题" linkable dataSource={this.state.data} columns={columnsForDetail} />
      </>
    );
  }
}

export default App;
