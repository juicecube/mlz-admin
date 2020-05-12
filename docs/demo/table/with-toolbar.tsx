/**
 * title: 自带工具栏的Table
 * desc: 通过自行配置 `toolBarRender` 函数来展示工具栏。它须返回一个React组件或组件的数组。
 */
import React from 'react';
import { Button, Divider } from 'antd';
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
    ellipsis: true,
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
    valueType: 'date',
  },
  {
    title: '花费',
    dataIndex: 'money',
    valueType: 'money',
  },
  {
    title: '操作',
    valueType: 'option',
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
    return (
      <Table
        columns={columns}
        data={this.state.data}
        loading={this.state.loading}
        limit={10}
        rowKey="key"
        onSearch={(e: any) => {}}
        toolBarRender={() => [
          <Button key="3" type="primary">
            {/* <PlusOutlined /> */}
            新建
          </Button>,
        ]}
      />
    );
  }
}

export default App;
