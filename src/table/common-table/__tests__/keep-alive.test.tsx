import React, { Component } from 'react';
import { testMount } from '../../../../tests';
import { mount } from 'enzyme';
import CommonTable from '..';

const data = new Array(15).fill('').map((_, index) => {
  return {
    name: index,
    score: 1 + Math.random() * 100,
  };
});

describe('🧪 CommonTable within keep-alive caching', () => {
  const onCacheHittedFn = jest.fn();
  const onChangeFn = jest.fn();
  const TempCachingTableMounter = () => (
    <CommonTable
      cacheKey="testKey"
      dataSource={data}
      rowKey="name"
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '得分',
          dataIndex: 'score',
        },
      ]}
      onCacheHitted={onCacheHittedFn}
      onChange={onChangeFn}
      pagination={{ pageSize: 10, total: data.length }}
    />
  );

  testMount(TempCachingTableMounter);

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<TempCachingTableMounter />);
  });

  it('当设定了cacheKey则正确触发onCacheHitted事件，并携带正确参数', async () => {
    expect(onCacheHittedFn).toBeCalledWith({});
  });

  it('设定了cacheKey时onChange事件携带正确参数被触发', async () => {
    wrapper.find('.ant-pagination-item-2').simulate('click');
    expect(wrapper.find('.ant-pagination-item-2').length).toBe(1);
    expect(onChangeFn).toBeCalledWith(
      {
        current: 2,
        pageSize: 10,
        total: data.length,
      },
      {},
      {},
      {
        action: 'paginate',
        currentDataSource: data,
      },
    );
  });
});
