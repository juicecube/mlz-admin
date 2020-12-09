import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { testMount, getCurrentRef, sleep } from '../../../tests';
import DecodePhone, { INIT_TITLE } from '..';
import { decodePhone } from '../../shared/service';

jest.mock('../../shared/service/index.ts', () => {
  return {
    decodePhone: jest.fn(),
  };
});

const params = 'jZgOvsexafxJUlU3WHaMfA==';
const testee = '155****1234';
describe('🧪  DecodePhone', () => {
  testMount(DecodePhone);

  it('render content corrrectly', async (done) => {
    decodePhone.mockResolvedValueOnce('ok');
    const onReadyHandler = jest.fn();
    const onErrorHandler = jest.fn();
    const wrapper = mount(
      <DecodePhone params={params} onReady={onReadyHandler}>
        <span id="phone">{testee}</span>
      </DecodePhone>,
    );

    wrapper
      .find('#phone')
      .at(0)
      .simulate('click');
    await act(() => sleep(1500));
    expect(onReadyHandler).toHaveBeenCalledTimes(1);
    expect(onErrorHandler).toHaveBeenCalledTimes(0);
    expect(getCurrentRef(wrapper, '.ant-tooltip-inner').innerHTML).not.toBe(INIT_TITLE);
  });
});
