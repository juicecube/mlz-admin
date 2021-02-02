import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import { mount } from 'enzyme';
import DetailCard from '..';

const dateSource = { title: 'test', name: 'name' };
const columns = [
  {
    title: '测试title',
    dataIndex: 'title',
    primary: true,
  },
  {
    title: '测试name',
    dataIndex: 'name',
  },
];

describe('🧪 DetailCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<DetailCard title="发货详情" dataSource={dateSource} columns={columns} />);
  });

  test('如果没有数据和列表则显示空', () => {
    expect(mount(<DetailCard title="发货详情" columns={columns} dataSource={null} />)).toEqual({});
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

  test('开启矛点快速跳转', () => {
    const linkableWrapper = mount(<DetailCard linkable title="发货详情" dataSource={dateSource} columns={columns} />);
    expect(linkableWrapper.find('a').length).toBe(1);
    expect(linkableWrapper.find('a').prop('href')).toBe('#发货详情');
  });

  test('Table模式详情', () => {
    const tableWrapper = mount(<DetailCard displayType="table" title="发货详情" dataSource={dateSource} columns={columns} />);
    expect(tableWrapper.find('tr').length).toBe(2);
    expect(
      tableWrapper
        .find('tbody')
        .find('tr')
        .at(0)
        .find('td')
        .at(0)
        .text(),
    ).toBe('test');
  });

  test('自定义render内容', () => {
    const customedColumns = [
      {
        title: '测试title',
        dataIndex: 'title',
        render: (text) => <a id="testLink">{text}</a>,
      },
    ];
    const customedWrapper = mount(<DetailCard title="发货详情" dataSource={dateSource} columns={customedColumns} />);
    expect(customedWrapper.find('tr').length).toBe(1);
    expect(
      customedWrapper
        .find('tr')
        .at(0)
        .find('td')
        .at(0)
        .find('a#testLink')
        .text(),
    ).toBe(dateSource.title);
  });
});
