/**
 * title: 基本使用
 * desc: 通过传入 `dataSource` 和`columns`来展示相关信息
 * background: '#F0F2F5'
 */
import React from 'react';
import { DetailCard } from '@mlz/admin';
import axios from 'axios';

const columns = [
  {
    title: 'sku编码',
    dataIndex: 'skuNumber',
    width: 180,
  },
  {
    title: '发货单元名称',
    dataIndex: 'materialName',
  },
  {
    title: 'business编号',
    dataIndex: 'businessCode',
  },
  {
    title: '分摊比例',
    dataIndex: 'ratio',
    type: 'ratio',
  },
];
class App extends React.PureComponent {
  state = {
    data: [],
  };

  async componentDidMount() {
    const { data } = await axios.post('https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect', {
      url: 'http://rap2api.taobao.org/app/mock/252468/admini/detail-demo',
    });
    this.setState({
      data: data && data && JSON.parse(data).skus,
    });
  }

  render() {
    return (
      <>
        <DetailCard title="发货详情" displayType="table" dataSource={this.state.data} columns={columns} />
      </>
    );
  }
}

export default App;
