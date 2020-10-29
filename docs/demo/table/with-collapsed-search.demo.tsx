/**
 * title: 带可收起/展开的搜索项
 * desc: 通过传入 `searchCollapsedThreshold` 来设置最少展示搜索项条数，多于这个数字时会显示隐藏按钮。并在点击后隐藏（不是unmount，而是隐藏）。
 */
import React from 'react';
import { Table } from '@mlz/admin';
import axios from 'axios';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    primary: true,
    searchable: true,
  },
  {
    title: 'Desc',
    dataIndex: 'desc',
    ellipsis: true,
    width: 250,
    searchable: true,
  },
  {
    title: 'Nothing',
    dataIndex: 'name1',
    searchable: true,
  },
  {
    title: 'Link',
    dataIndex: 'linkage',
    type: 'link',
    render: (value) => (
      <a href={value} target="_blank" rel="noopener noreferrer">
        点击查看链接
      </a>
    ),
  },
  {
    title: 'Cost',
    dataIndex: 'money',
    type: 'price',
    searchable: true,
    sorter: (a, b) => a.money - b.money,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    type: 'enum',
    searchable: true,
    enums: {
      all: '全部',
      close: '售罄',
      running: '补货中',
      online: '正在销售',
      error: '库存不足',
    },
  },
  {
    title: 'Forwards',
    dataIndex: 'status',
    type: 'tag',
    searchable: true,
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
    render: () => [<a key={1}>检查</a>],
  },
];

class App extends React.PureComponent {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (params?: { current: number; pageSize: number }) => {
    this.setState({ loading: true });
    const { data } = await axios.post('https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect', {
      url: 'http://rap2api.taobao.org/app/mock/252468/admini/table-demo',
      params: params || {
        current: 1,
        pageSize: 10,
      },
    });
    this.setState({
      data: JSON.parse(data).items,
      loading: false,
    });
  };

  render() {
    return <Table columns={columns} dataSource={this.state.data} loading={this.state.loading} scroll={{ x: 1300 }} searchCollapsedThreshold={4} />;
  }
}

export default App;
