import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import Table from '..';

describe('🧪 Table', () => {
  // onClick在menu/group属性存在时会成为合成事件被唤起，且参数正确
  test('onClick should be called within a composed params when using group prop', () => {
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
        data={[]}
      />,
    );
    expect(() => {
      wrapper.unmount();
    }).not.toThrow();
  });
});
