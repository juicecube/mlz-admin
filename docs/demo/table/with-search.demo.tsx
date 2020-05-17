/**
 * title: 自带搜索条件的Table
 * desc: columns 数组的元素中，带有 `searchable` 属性的列会渲染出对应的搜索表单，并且根据 `searchable` 值的大小进行排序。
 */
import React from 'react';
import Table from '@/Table/Table';
import reqwest from 'reqwest';

const columns = [
  {
    title: '服务',
    dataIndex: 'name',
    searchable: true,
    fixed: 'left',
    primary: true,
  },
  {
    title: '服务描述',
    dataIndex: 'desc',
    width: 250,
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
    title: '创建日期',
    dataIndex: 'createdAt',
    valueType: 'date',
    searchable: true,
  },
  {
    title: '上线时间',
    dataIndex: 'updatedAt',
    valueType: 'dateTime',
    searchable: true,
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
    fixed: 'right',
    width: 120,
    render: () => [<a>设置</a>, <a>删除</a>],
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
    this.fetchData({
      current: this.state.current,
      limit: this.state.limit,
    });
  }

  fetchData = (pgn?: { current: number; limit: number }) => {
    this.setState({ loading: true });
    reqwest({
      url: 'http://rap2.taobao.org:38080/app/mock/252468/admini/table-demo',
      method: 'get',
      data: pgn
        ? {
            ...pgn,
            ...this.state.params,
          }
        : {
            current: this.state.current,
            limit: this.state.limit,
            ...this.state.params,
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
        scroll={{ x: 1300 }}
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
