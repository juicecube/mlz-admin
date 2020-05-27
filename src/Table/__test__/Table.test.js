import React from 'react';
import { render } from 'enzyme';
import Table from '../Table';
import testMount from '../../../tests/testMount';
import HttpReponseMock from '../../../tests/mockHttp';

// 生成table所需数据
export const generateData = (current, limit = 10) => {
  const data = [];
  for (let i = 1; i < 3; i++) {
    data.push({
      id: current * i,
      name: `name${current * i}`,
    });
  }
  return data;
}

describe('📦 Table', () => {
  //
  testMount(Table);

  // 1，
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      primary: true,
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
  ];
  it('正确地渲染dataSource数据', async () => {
    const data = await new HttpReponseMock(generateData(1)).response();
    console.log(data);
    const wrapper = render(<Table column={columns} data={data.items} />);
    const children = wrapper.find('.ant-table-row');
    expect(children.length).toBe(3);
  });

  // common func
  // 正确地翻页

  // 正确地设置pageSize

  // 正确地跳转到对应页

  // 如果没有传入data和columns也不能crash

  // 特性test
  // 2，带搜索条件
  // 3，带工具栏
  // 4，开启keep-alive功能
  // 5，特殊columns
  // a，valueType = 'tag'
  // b，valueType = 'maskedTel'
});
