/**
 * title: 搜索项
 * desc: 通过传入 `data` 来展示表格，通过 `onChange`和 `onSearch` 等参数控制交互。
 */
import React from 'react';
import { Table } from '@mlz/admin';
import axios from 'axios';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    searchable: 6,
    primary: true,
  },
  {
    title: 'Id',
    dataIndex: 'id',
    type: 'number',
    width: 60,
    searchable: 5,
    hidden: true,
    searchKey: 'testKey',
  },
  {
    title: 'Cost',
    dataIndex: 'money',
    type: 'price',
    searchable: 5,
    searchType: 'price',
  },
  {
    title: 'CreatedAt',
    dataIndex: 'createdAt',
    type: 'date',
    searchType: 'dateRange',
    searchColSpan: 10,
  },
  {
    title: 'Forwards',
    dataIndex: 'status',
    type: 'tag',
    searchable: 2,
    enums: {
      all: { text: '全部', color: 'magenta' },
      close: { text: '售罄', color: 'red' },
      running: { text: '补货中', color: 'volcano', desc: 'testDesc' },
      online: { text: '正在销售', color: 'orange' },
      error: { text: '库存不足', color: 'gold' },
    },
  },
  {
    title: '操作',
    render: () => [
      <a key={1} style={{ marginRight: 6 }}>
        检查
      </a>,
      <a key={2}>关闭</a>,
    ],
  },
];

class App extends React.PureComponent {
  state = {
    data: {} as any,
    loading: true,
    searchParams: {
      current: 1,
      pageSize: 10,
    },
  };

  componentDidMount() {
    this.fetchData(this.state.searchParams);
  }

  fetchData = async (params?: { current?: number; pageSize?: number; [key: string]: any }) => {
    this.setState({ loading: true });
    const { data } = await axios.post('https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect', {
      url: 'http://rap2api.taobao.org/app/mock/252468/admini/table-demo',
      params: params || {
        current: 1,
        pageSize: 10,
      },
    });
    this.setState({
      data: data && JSON.parse(data),
      loading: false,
    });
  };

  render() {
    return (
      <Table
        dataSource={this.state.data.items}
        loading={this.state.loading}
        columns={columns}
        pagination={{ pageSize: 10, total: this.state.data.total || 50, showSizeChanger: true, showQuickJumper: true }}
        onChange={(png) => this.fetchData({ ...this.state.searchParams, ...png })}
        onSearch={(e) => {
          this.fetchData({ ...this.state.searchParams, ...e });
        }}
      />
    );
  }
}

export default App;
