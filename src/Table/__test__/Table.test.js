import React from 'react';
import { render } from 'enzyme';
import Table from '../Table';
import testMount from '../../shared/tests/testMount';
import mockAxios from '../../../tests/__mocks__/axiosTest';

// 同步的方式mock数据
const mockFn = jest.fn(({ current, limit }) => {
  let mockedData = { status: 1, messages: '', items: [] };
  for (var i = 1; i < 3; i++) {
    mockedData.items.push({
      id: current * i,
      name: `name${current * i}`,
    });
  }
  return mockedData;
});

describe('📦 Table', function() {
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
  it('正确地渲染dataSource数据', function() {
    const data = mockFn({ current: 1, limit: 2 });
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
