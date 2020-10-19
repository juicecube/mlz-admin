import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import { mount } from 'enzyme';
import DetailCard from '..';

const dateSource = { title: 'test', name: 'name' };
const columns = [
  {
    title: '测试title',
    dataIndex: 'title',
  },
  {
    title: '测试name',
    dataIndex: 'name',
  },
];

const TempDetailCardMount = <DetailCard title="发货详情" dataSource={dateSource} columns={columns} />;
describe('🧪 DetailCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<DetailCard title="发货详情" dataSource={dateSource} columns={columns} />);
  });

  test('如果没有数据和列表则显示空', () => {
    expect(mount(<DetailCard title="发货详情" columns={columns} dataSource={null} />)).toEqual({});
    expect(mount(<DetailCard title="发货详情" columns={null} dataSource={dateSource} />)).toEqual({});
  });

  test('是否显示了正确的对应元素', () => {
    expect(wrapper.find('.ant-descriptions-item-label').length).toBe(2);
    expect(wrapper.find('.ant-descriptions-item-content').length).toBe(2);
    expect(
      wrapper
        .find('.ant-descriptions-item-label')
        .at(0)
        .text(),
    ).toBe(columns[0].title);
    expect(
      wrapper
        .find('.ant-descriptions-item-content')
        .at(0)
        .text(),
    ).toBe(dateSource.title);
  });
});
