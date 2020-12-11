import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { testMount, sleep } from '../../../tests';
import DecodePhone, { INIT_TITLE } from '..';
import { decodePhone } from '../../shared/service';

jest.mock('../../shared/service/index.ts', () => {
  return {
    decodePhone: jest.fn().mockImplementationOnce(() => Promise.resolve(`13820003000`)),
  };
});

const params = 'jZgOvsexafxJUlU3WHaMfA==';
const testee = '155****1234';
describe('🧪 DecodePhone', () => {
  testMount(DecodePhone);

  let wrapper;
  let target;
  let onReadyHandler;
  beforeEach(() => {
    onReadyHandler = jest.fn();
    wrapper = mount(
      <DecodePhone params={params}>
        <span id="phone">{testee}</span>
      </DecodePhone>,
    );
    target = wrapper.find('#phone').at(0);
  });

  it('点击时发送解码请求', async () => {
    wrapper.setProps({ onReady: onReadyHandler });
    await act(async () => {
      target.simulate('click');
    });
    sleep(200);
    expect(document.getElementsByClassName('ant-tooltip-inner')[0].innerHTML).toBe('13820003000');
    expect(onReadyHandler).toHaveBeenCalledTimes(1);
  });

  it('点击更多的时候，不会再发送多余请求', async () => {
    wrapper.setProps({ onReady: onReadyHandler });
    await act(async () => {
      target.simulate('click');
    });
    await act(async () => {
      target.simulate('click');
    });
    await act(async () => {
      target.simulate('click');
    });
    sleep(200);
    expect(document.getElementsByClassName('ant-tooltip-inner')[0].innerHTML).toBe('13820003000');
    expect(onReadyHandler).toHaveBeenCalledTimes(1);
  });
});
