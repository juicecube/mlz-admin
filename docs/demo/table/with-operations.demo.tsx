/**
 * title: 操作栏
 * desc: 通过传入 `operations` 组件数组，来展示对应的操作栏。它与tools api最直观的区别就是它位于Table的左侧，而后者在右侧。
 * background: '#f0f2f5'
 */
import React from 'react';
import { Table, Button, Icon, message } from '@mlz/admin';
import axios from 'axios';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    primary: true,
  },
  {
    title: 'Id',
    dataIndex: 'id',
    type: 'number',
    width: 60,
  },
  {
    title: 'Desc',
    dataIndex: 'desc',
    ellipsis: true,
    width: 220,
  },
  {
    title: 'Cost',
    dataIndex: 'money',
    type: 'price',
  },
  {
    title: 'Forwards',
    dataIndex: 'status',
    type: 'tag',
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
    render: () => [
      <a key={1} style={{ marginRight: 6 }}>
        检查
      </a>,
      <a key={2}>关闭</a>,
    ],
  },
];

class App extends React.PureComponent {
  state = {
    data: {} as any,
    loading: true,
    searchParams: {
      current: 1,
      pageSize: 10,
    },
    selectionType: 'checkbox',
    selected: [],
  };

  componentDidMount() {
    this.fetchData(this.state.searchParams);
  }

  fetchData = async (params?: { current?: number; pageSize?: number; [key: string]: any }) => {
    this.setState({ loading: true });
    const { data } = await axios.post('https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect', {
      url: 'http://rap2api.taobao.org/app/mock/252468/admini/table-demo',
      params: params || {
        current: 1,
        pageSize: 10,
      },
    });
    this.setState({
      data: data && data && JSON.parse(data),
      loading: false,
    });
  };

  rowSelection = {
    onChange: (selectedRowKeys) => {
      this.setState({
        selected: selectedRowKeys?.length ? Array.from(new Set(this.state.selected.concat(selectedRowKeys))) : [],
      });
    },
  };

  render() {
    const { data } = this.state;
    return (
      <Table
        columns={columns}
        dataSource={data?.items}
        loading={this.state.loading}
        pagination={{ pageSize: 10, total: data?.total || 50, showSizeChanger: true, showQuickJumper: true }}
        onChange={(png) => {
          this.setState(
            {
              searchParams: { ...png, ...this.state.searchParams },
            },
            () => this.fetchData(this.state.searchParams),
          );
        }}
        onSearch={(e) => {
          this.setState(
            {
              searchParams: { ...e, ...this.state.searchParams },
            },
            () => this.fetchData(this.state.searchParams),
          );
        }}
        onReset={() => {
          this.setState(
            {
              searchParams: {
                current: 1,
                pageSize: 10,
              },
            },
            () => this.fetchData(this.state.searchParams),
          );
        }}
        tools={[
          <a key={1}>导出数据</a>,
          <Button type="primary" icon={<Icon type="upload_l" />} key={2}>
            批量上传
          </Button>,
        ]}
        operations={[
          <Button disabled={!this.state.selected.length} type="primary" key={2} onClick={() => message.success(`选中了：${this.state.selected.join(' 和 ')}`)}>
            批量通知
          </Button>,
          <span>
            选择了：<span style={{ color: 'red', fontWeight: 600, marginRight: 6 }}>{this.state.selected.length}</span>项
          </span>,
        ]}
        rowSelection={{
          type: this.state.selectionType,
          ...this.rowSelection,
        }}
      />
    );
  }
}

export default App;
