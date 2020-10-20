import React, { Component } from 'react';
import { AlivesStore, errorMsgs, maxSnapshotLength } from '../keep-alive.store';

const errorStringFilter = (errorMsg: string) => `Error: ${errorMsg}`;

describe('🧪 KeepAlive Store', () => {
  let cacheInstance;
  beforeEach(() => {
    cacheInstance = new AlivesStore();
  });

  test('若推进队列的参数不是对象，则抛出异常', () => {
    const errorCatcher1 = jest.fn();
    const errorCatcher2 = jest.fn();
    try {
      cacheInstance.pushStateIntoSnapshots('test', undefined);
    } catch (err) {
      errorCatcher1(err.toString());
    }
    expect(errorCatcher1).toBeCalledWith(errorStringFilter(errorMsgs.invalidArgsInPushment + undefined));
    try {
      cacheInstance.pushStateIntoSnapshots('test', '0xa41ac');
    } catch (err) {
      errorCatcher2(err.toString());
    }
    expect(errorCatcher2).toBeCalledWith(errorStringFilter(errorMsgs.invalidArgsInPushment + '0xa41ac'));
  });

  test('若推进队列的索引名称已经存在，则覆盖前一次快照', () => {
    cacheInstance.pushStateIntoSnapshots('test', { pageSize: 1 });
    expect(cacheInstance.getSnapshot('test')?.['payload']).toEqual({ pageSize: 1 });
    cacheInstance.pushStateIntoSnapshots('test', { pageSize: 2 });
    expect(cacheInstance.getSnapshot('test')?.['payload']).toEqual({ pageSize: 2 });
  });

  test('快照储存数量不允许大于' + maxSnapshotLength, () => {
    for (let i = 0; i < maxSnapshotLength; i++) {
      cacheInstance.pushStateIntoSnapshots(`test${i}_${Math.random() * 100}`, { pageSize: i });
    }
    expect(cacheInstance.getSnapshots().length).toBe(maxSnapshotLength);
    cacheInstance.pushStateIntoSnapshots('test', { pageSize: maxSnapshotLength });
    expect(cacheInstance.getSnapshots().length).toBe(1);
  });
});
