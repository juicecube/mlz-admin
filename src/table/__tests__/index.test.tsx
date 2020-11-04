import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import Table from '..';

describe('🧪 Table', () => {
  // onClick在menu/group属性存在时会成为合成事件被唤起，且参数正确
  test('Table正确浅渲染', () => {
    const wrapper = shallow(
      <Table
        columns={[
          {
            title: '用户Id',
            dataIndex: 'user_id',
            key: 'user_id',
          },
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },
        ]}
        dataSource={[]}
      />,
    );
    expect(() => {
      wrapper.unmount();
    }).not.toThrow();
  });

  test('当没有searchable的column，且存在tools或operations时，一样要显示searchForm', () => {
    const wrapperWithTools = mount(
      <Table
        columns={[
          {
            title: '用户Id',
            dataIndex: 'user_id',
            key: 'user_id',
          },
        ]}
        dataSource={[]}
        tools={[<span id="test">test</span>]}
      />,
    );
    const wrapperWithOperations = mount(
      <Table
        columns={[
          {
            title: '用户Id',
            dataIndex: 'user_id',
            key: 'user_id',
          },
        ]}
        dataSource={[]}
        operations={[<span id="test">test</span>]}
      />,
    );
    expect(
      wrapperWithTools
        .find('.bar-area')
        .find('#test')
        .text(),
    ).toBe('test');
    expect(
      wrapperWithOperations
        .find('.bar-area')
        .find('#test')
        .text(),
    ).toBe('test');
  });
});
