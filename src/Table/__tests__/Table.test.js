import React from 'react';
import Table from './../Table';
import testMount from '../../shared/tests/testMount';
import mockAxios from '../../../tests/__mocks__/axiosTest';

describe('Table Component', function() {
  //
  testMount(Table);

  // 1， 渲染data数据
  it('render dataSource successfully', function() {
    mockAxios.get.mockImplementationOnce(() => {
      const wrapper = mount(<Table />);
      return Promise.resolve({
        data: {
          data: [1, 2, 3],
          error_code: 0,
          message: '',
        },
      });
    });
  });

  // common func
  // 正确地翻页

  // 正确地设置pageSize

  // 正确地跳转到对应页

  // 特性test
  // 2，带搜索条件
  // 3，带工具栏
  // 4，开启keep-alive功能
  // 5，特殊columns
  // a，valueType = 'tag'
  // b，valueType = 'maskedTel'
});
