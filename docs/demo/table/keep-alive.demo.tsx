/**
 * title: keepAlive 数据缓存
 * desc: 通过指定 `cacheKey` 的key来为Table组件指定对应的缓存，当该key对应的缓存被调取时会触发`onCacheHitted`方法
 */
import React from 'react';
import { Table } from '@mlz/admin';
import axios from 'axios';

const columns = [
  {
    title: 'Desc',
    dataIndex: 'desc',
    searchable: true,
    primary: true,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    searchable: true,
  },
  {
    title: 'Linkage',
    dataIndex: 'linkage',
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
];

class App extends React.PureComponent {
  state = {
    data: {} as any,
    loading: true,
    searchParams: {
      current: 1,
      pageSize: 10,
    },
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

  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.state.data.items}
        loading={this.state.loading}
        cacheKey="testKA"
        onCacheHitted={(pa) => {
          console.log(pa);
        }}
        pagination={{ pageSize: 10, total: this.state.data.total || 50, showSizeChanger: true, showQuickJumper: true }}
        onChange={(png) => this.fetchData({ ...this.state.searchParams, ...png })}
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
      />
    );
  }
}

export default App;
