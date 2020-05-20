/**
 * title: 自带工具栏的Table
 * desc: 通过自行配置 `toolBarRender` 函数来展示工具栏。它须返回一个React组件或组件的数组。
 */
import React from 'react';
import { Button, Divider } from 'antd';
import Table from '@/Table/Table';
import axios from 'axios';

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

class App extends React.PureComponent {
  state = {
    data: [],
    limit: 10,
    current: 1,
    total: 10,
    params: {},
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = (pgn?: { current: number; limit: number }) => {
    this.setState({ loading: true });
    axios
      .get('http://rap2.taobao.org:38080/app/mock/252468/admini/table-demo', {
        method: 'get',
        params: pgn
          ? {
              ...pgn,
              ...this.state.params,
            }
          : {
              current: this.state.current,
              limit: this.state.limit,
              ...this.state.params,
            },
      })
      .then((res: any) => {
        const { data } = res;
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
        toolBarRender={() => [<Button type="primary">新建</Button>, <Button>导入</Button>]}
        onChange={(pgn: any) => {
          this.fetchData(pgn);
        }}
        onSearch={(params: any) => {
          this.setState(
            {
              params: Object.assign({}, this.state.params, params),
            },
            () => {
              this.fetchData();
            },
          );
        }}
      />
    );
  }
}

export default App;
