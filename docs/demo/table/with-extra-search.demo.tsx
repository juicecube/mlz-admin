import React, { useState, useEffect } from 'react';
import { Table, Slider } from '@mlz/admin';
import axios from 'axios';
import { Rate } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    searchable: 1,
    primary: true,
  },
  {
    title: 'Cost',
    dataIndex: 'money',
    type: 'price',
    searchable: 2,
    searchType: 'price',
    searchRender: () => <CustomedSlider />,
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

const CustomedSlider: React.FC<any> = ({ value, onChange }) => {
  const [rate, setRate] = useState<number>(value || 0);
  useEffect(() => {
    onChange?.(rate);
  }, [rate]);
  return <Slider min={1} max={20} onChange={(e) => setRate(e)} value={value || rate} />;
};

class App extends React.PureComponent {
  state = {
    data: [],
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
      data: JSON.parse(data),
      loading: false,
    });
  };

  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.state.data['items']}
        loading={this.state.loading}
        pagination={{ pageSize: 10, total: this.state.data['total'] || 50, showSizeChanger: true, showQuickJumper: true }}
        onChange={(png) => {
          this.setState(
            {
              searchParams: { ...png, ...this.state.searchParams },
            },
            () => this.fetchData(this.state.searchParams),
          );
        }}
        onSearch={(e) => this.fetchData({ ...this.state.searchParams, ...e })}
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
