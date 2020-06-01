/**
 * title: 基本使用
 * desc: 通过传入 `data` 来展示表格，通过 `onChange`和 `onSearch` 等参数控制交互。
 */
import React from 'react';
import Table from '@/Table/Table';
import axios from 'axios';

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
    valueType: 'tag' as const,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '售罄', status: 'Error' },
      running: { text: '补货中', status: 'Processing' },
      online: { text: '正在销售', status: 'Success' },
      error: { text: '库存不足', status: 'Warning' },
    } as const,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    valueType: 'dateTime' as const,
  },
  {
    title: '更新时间',
    dataIndex: 'createdAt',
    valueType: 'date' as const,
  },
  {
    title: '操作',
    valueType: 'option' as const,
    width: 120,
    render: () => [<a>设置</a>, <a>下架</a>],
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

  fetchData = (params?: { current: number; limit: number }) => {
    this.setState({ loading: true });
    axios
      .get('http://rap2.taobao.org:38080/app/mock/252468/admini/table-demo', {
        method: 'get',
        params: params || {
          current: 1,
          limit: 10,
        },
      })
      .then((res: any) => {
        const { data } = res;
        this.setState({
          data: data.items,
          loading: false,
        });
      });
  };

  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.state.data}
        loading={this.state.loading}
        onChange={(pgn: any) => {
          this.fetchData(pgn);
        }}
      />
    );
  }
}

export default App;
