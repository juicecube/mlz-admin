import React from 'react';
import { sleep } from '../../../../../tests';
import useStaffLogout from '..';
import { noManualSettedReminder } from '../../shared/basic-request-hook';
import { renderHook, act } from '@testing-library/react-hooks';
import Staff from '../model';
import { logout } from '../controller';

jest.mock('../controller', () => {
  return {
    logout: jest.fn().mockImplementation(() => Promise.resolve('ok')),
  };
});

describe('🧪 useStaffLogout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  it('hooks定义正确', () => {
    expect(useStaffLogout).toBeDefined();
  });

  const expectedResponsedValue = 'ok';

  it('logout方法mock执行正确', async () => {
    (logout as jest.Mocked<any>).mockResolvedValue('ok');
    const staff = Staff.create();
    const result = await staff.lougout();
    sleep(100);
    expect(result).toBe(expectedResponsedValue);
  });

  it('自动触发且loading状态正确', async () => {
    (logout as jest.Mocked<any>).mockResolvedValue('ok');
    const theHook = renderHook(() => useStaffLogout({ init: { loading: true } }));
    const { result, waitForNextUpdate } = theHook as any;
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.data).toBe(expectedResponsedValue);
    expect(result.current.loading).toBe(false);
  });

  it('通过手动run+manual触发且loading状态正确', async () => {
    (logout as jest.Mocked<any>).mockResolvedValue('ok');
    const { result, waitForNextUpdate } = renderHook(() => useStaffLogout({ manual: true }));
    const hookRef = result.current as any;
    expect(result.current.loading).toBe(false);
    let res;
    act(async () => {
      res = await hookRef.run();
    });
    await waitForNextUpdate();
    expect(res).toBe('ok');
  });

  it('通过手动run触发，但是没有设置manual则给予错误警示', () => {
    (logout as jest.Mocked<any>).mockResolvedValue('ok');
    const { result, waitForNextUpdate } = renderHook(() => useStaffLogout({ init: { loading: true } }));
    expect(() => result.current.run()).toThrowError(noManualSettedReminder);
  });
});
