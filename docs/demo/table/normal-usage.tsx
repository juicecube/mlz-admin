/**
 * title: 基本使用
 * desc: 通过传入 `data` 来展示表格，通过 `onChange`和 `onSearch` 等参数控制交互。
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
    title: '状态标签',
    dataIndex: 'status',
    valueType: 'tag',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Error' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Warning' },
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
    render: () => [<a>处理</a>, <a>删除</a>],
  },
];

const stateEnum = ['close', 'running', 'online', 'error'];
const list = [...new Array(60).keys()].reduce((prev: any, curr: any) => {
  return prev.concat([
    {
      key: curr + 1,
      name: `TradeCode ${curr * 2}`,
      status: stateEnum[Math.floor(Math.random() * 10) % 4],
      updatedAt: Date.now() - Math.floor(Math.random() * 1000),
      createdAt: Date.now() - Math.floor(Math.random() * 2000),
    },
  ]);
}, []);

class App extends React.Component {
  state = {
    data: [],
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: list,
        loading: false,
      });
    }, 1000);
  }
  render() {
    return <Table columns={columns} data={this.state.data} loading={this.state.loading} search={true} limit={10} rowKey="key" onChange={(e: any) => {}} />;
  }
}

export default App;
