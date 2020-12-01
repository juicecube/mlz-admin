import React from 'react';
import { testMount, getCurrentRef, sleep } from '../../../tests';
import { render, waitFor, act } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
import DecodePhone, { INIT_TITLE } from '..';
import { mount } from 'enzyme';

const params = 'jZgOvsexafxJUlU3WHaMfA==';
const testedEncodedTel = '155****1234';
describe('🧪  DecodePhone', () => {
  testMount(DecodePhone);
  // testSnapshot(DecodePhone);

  it('render content corrrectly', async (done) => {
    const onReadyHandler = jest.fn();
    const onErrorHandler = jest.fn();
    const wrapper = mount(
      <DecodePhone params={params} onReady={onReadyHandler} onError={onErrorHandler}>
        <span id="phone">{testedEncodedTel}</span>
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

  it('second click will not do request', async () => {
    const onReadyHandler = jest.fn();
    const onErrorHandler = jest.fn();
    const wrapper = mount(
      <DecodePhone params={params} onReady={onReadyHandler} onError={onErrorHandler}>
        <span id="phone">{testedEncodedTel}</span>
      </DecodePhone>,
    );
    const div = wrapper.find('#phone').at(0);
    div.simulate('click');
    expect(onReadyHandler).toHaveBeenCalledTimes(1);
    expect(onErrorHandler).toHaveBeenCalledTimes(1);
    div.simulate('click');
    div.simulate('click');
    expect(onReadyHandler).toHaveBeenCalledTimes(1);
  });
});
