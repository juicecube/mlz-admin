import React, { useState, useEffect } from 'react';
import Table from '@/Table/Table';
import axios from 'axios';
import { Slider, Rate, Input } from 'antd';

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
    const { data } = await axios.get('http://rap2.taobao.org:38080/app/mock/252468/admini/table-demo', {
      method: 'get',
      params,
    });
    this.setState({
      data: data.items,
      loading: false,
    });
  };

  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.state.data}
        loading={this.state.loading}
        pagination={{ total: 50, showSizeChanger: true, showQuickJumper: true }}
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
