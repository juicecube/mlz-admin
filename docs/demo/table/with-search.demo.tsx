/**
 * title: 自带搜索条件的Table
 * desc: columns 数组的元素中，带有 `searchable` 属性的列，会渲染出对应的搜索表单，并且根据 `searchable` 值的大小进行排序。
 */
import React from 'react';
import Table from '@/Table/Table';

const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    searchable: true,
    primary: true,
  },
  {
    title: '详情',
    dataIndex: 'desc',
    width: 220,
    searchable: true,
    ellipsis: true,
  },
  {
    title: '状态',
    dataIndex: 'status',
    initialValue: 'all',
    searchable: 3,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
    filters: [],
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    valueType: 'dateTime',
    searchable: true,
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    searchable: true,
    valueType: 'date',
  },
  {
    title: '花费',
    dataIndex: 'money',
    searchable: true,
    valueType: 'money',
  },
  {
    title: '操作',
    valueType: 'option',
    width: 120,
    render: () => [<a>处理</a>, <a>删除</a>],
  },
];

const stateEnum = ['close', 'running', 'online', 'error'];
const list = [...new Array(50).keys()].reduce((prev: any, curr: any) => {
  return prev.concat([
    {
      key: curr,
      name: `TradeCode ${curr}`,
      status: stateEnum[Math.floor(Math.random() * 10) % 4],
      desc: String.fromCharCode(Math.ceil(Math.random() * 255)).repeat(Math.floor(Math.random() * 120)),
      updatedAt: Date.now() - Math.floor(Math.random() * 1000),
      createdAt: Date.now() - Math.floor(Math.random() * 2000),
      money: Math.floor(Math.random() * 2000) * curr,
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
    return <Table columns={columns} data={this.state.data} loading={this.state.loading} limit={10} rowKey="key" onChange={(e: any) => {}} onSearch={(e: any) => {}} />;
  }
}

export default App;
