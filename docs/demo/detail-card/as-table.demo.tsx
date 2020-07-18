/**
 * title: 基本使用
 * desc: 通过传入 `dataSource` 和`columns`来展示相关信息
 * background: '#F0F2F5'
 */
import React from 'react';
import DetailCard from '@/DetailCard/DetailCard';
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
    this.setState({ loading: true });
    const { data } = await axios.get('http://rap2.taobao.org:38080/app/mock/252468/admini/detail-demo');
    this.setState({
      data,
      loading: false,
    });
  }

  render() {
    return (
      <>
        <DetailCard title="发货详情" displayType="table" dataSource={this.state.data['skus']} columns={columns} />
      </>
    );
  }
}

export default App;
