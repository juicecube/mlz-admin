import React from 'react';
import { act } from 'react-dom/test-utils';
import { sleep } from '../../../../../tests';
import useStaffLogout from '..';
import { noManualSettedReminder } from '../../shared/basic-request-hook';
import { renderHook } from '@testing-library/react-hooks';
import Staff from '../model';
import { logout } from '../controller';

jest.mock('../controller', () => {
  return {
    logout: jest.fn(),
  };
});

describe('🧪 useStaffLogout', () => {
  const expectedResponsedValue = 'ok';

  it('logout方法mock执行正确', async () => {
    (logout as jest.Mocked<any>).mockResolvedValue('ok');
    const staff = Staff.create();
    const result = await staff.lougout();
    sleep(100);
    expect(result).toBe(expectedResponsedValue);
  });

  it('不通过手动触发且loading状态正确', async () => {
    (logout as jest.Mocked<any>).mockResolvedValue('ok');
    const { result, waitForNextUpdate } = renderHook(() => useStaffLogout({ init: { loading: true } }));
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.data).toBe(expectedResponsedValue);
    expect(result.current.loading).toBe(false);
  });

  it('通过手动run+manual触发', async () => {
    (logout as jest.Mocked<any>).mockResolvedValue('ok');
    const { result, waitForNextUpdate } = renderHook(() => useStaffLogout({ manual: true, init: { loading: true } }));
    const hooksRef = result.current;
    const { run } = hooksRef;
    expect(result.current.loading).toBe(true);
    await run();
    expect(hooksRef.data).toBe(expectedResponsedValue);
    expect(hooksRef.loading).toBe(false);
  });

  it('通过手动run触发，但是没有设置manuel则给予错误警示', () => {
    // (logout as jest.Mocked<any>).mockResolvedValue('ok');
    // const { result, waitForNextUpdate } = renderHook(() => useStaffLogout({ init: { loading: true } }));
    // expect(() => result.current.run()).toThrowError(noManualSettedReminder);
  });

  it('根据deps进行请求发起', async () => {});
});
