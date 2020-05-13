import React from 'react';
import Table from './../Table';
import testMount from '../../shared/tests/testMount';

describe('Table Component', function() {
  //
  testMount(Table);

  // 1， 渲染data数据
  test('test 1st expectation', function() {
    expect(1 + 1).toBe(2);
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
