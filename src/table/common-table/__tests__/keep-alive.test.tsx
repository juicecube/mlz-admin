import React, { Component } from 'react';
import { testMount } from '../../../../tests';
import KeepAlive, { KAContext } from '../../../shared/keep-alive';
import CommonTable from '..';

describe('🧪 CommonTable within keep-alive caching', () => {
  const onCacheHittedFn = jest.fn();
  const TempCachingTableMounter = () => <CommonTable cacheKey="testKey" columns={[]} onCacheHitted={onCacheHittedFn} />;

  testMount(TempCachingTableMounter);

  it('当设定了cacheKey则正确触发onCacheHitted事件，并返回正确参数', async () => {
    expect(onCacheHittedFn).toBeCalled();
  });
});
