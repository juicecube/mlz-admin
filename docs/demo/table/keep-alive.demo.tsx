/**
 * title: keep-alive功能
 * desc: 用户需要从其它页面返回 Table 所在页面，并要求 Table 的数据保持跳出之前的状态，就需要开启 keep-alive 功能来保持状态。
 */
import React from 'react';
import Table from '@/Table/Table';
import reqwest from 'reqwest';

const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    primary: true,
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
    render: () => [<a>处理</a>, <a>删除</a>],
  },
];

class App extends React.PureComponent {
  state = {
    data: [],
    limit: 10,
    current: 1,
    total: 10,
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
        keepAlive="keep-alive-demo"
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
