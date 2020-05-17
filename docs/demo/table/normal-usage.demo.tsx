/**
 * title: 基本使用
 * desc: 通过传入 `data` 来展示表格，通过 `onChange`和 `onSearch` 等参数控制交互。
 */
import React from 'react';
import Table from '@/Table/Table';
import reqwest from 'reqwest';

const columns = [
  {
    title: '名称',
    dataIndex: 'desc',
    ellipsis: true,
    width: 350,
    primary: true,
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'tag',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '售罄', status: 'Error' },
      running: { text: '补货中', status: 'Processing' },
      online: { text: '正在销售', status: 'Success' },
      error: { text: '库存不足', status: 'Warning' },
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    valueType: 'dateTime',
  },
  {
    title: '更新时间',
    dataIndex: 'createdAt',
    valueType: 'date',
  },
  {
    title: '操作',
    valueType: 'option',
    width: 120,
    render: () => [<a>设置</a>, <a>下架</a>],
  },
];

class App extends React.PureComponent {
  state = {
    data: [],
    current: 1,
    total: 10,
    limit: 10,
    loading: true,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = (params?: { current: number; limit: number }) => {
    this.setState({ loading: true });
    reqwest({
      url: 'http://rap2.taobao.org:38080/app/mock/252468/admini/table-demo',
      method: 'get',
      type: 'json',
      data: params || {
        current: 1,
        limit: 10,
      },
    }).then((data: any) => {
      this.setState({
        data: data.items,
        total: data.total,
        current: parseInt(data.current_page, 10),
        limit: parseInt(data.page_size, 10),
        loading: false,
      });
    });
  };
  render() {
    return (
      <Table
        columns={columns}
        data={this.state.data}
        loading={this.state.loading}
        current={this.state.current}
        limit={this.state.limit as any}
        total={this.state.total}
        onChange={(pgn: any) => {
          this.fetchData(pgn);
        }}
      />
    );
  }
}

export default App;
