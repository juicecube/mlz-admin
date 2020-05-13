/**
 * title: keep-alive功能
 * desc: 用户需要从其它页面返回 Table 所在页面，并要求 Table 的数据保持跳出之前的状态，就需要开启 keep-alive 功能来保持状态。
 */
import React from 'react';
import Table from '@/Table/Table';

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

const stateEnum = ['close', 'running', 'online', 'error'];
class App extends React.Component {
  state = {
    data: [...new Array(60).keys()].reduce((prev: any, curr: any) => {
      return prev.concat([
        {
          key: curr + 1,
          name: `TradeCode ${curr * 2}`,
          status: stateEnum[Math.floor(Math.random() * 10) % 4],
          updatedAt: Date.now() - Math.floor(Math.random() * 1000),
          createdAt: Date.now() - Math.floor(Math.random() * 2000),
        },
      ]);
    }, []),
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }
  render() {
    return <Table columns={columns} keepAlive="keep-alive-demo" data={this.state.data} loading={this.state.loading} limit={10} rowKey="key" onChange={(e: any) => {}} />;
  }
}

export default App;
