import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { testMount, sleep } from '../../../../../tests';
import DecodePhone from '..';
import EncodePhoneModel from '../model';
import { decodeEncodedPhone } from '../../../service';

const testee = '155****1234';
const params = 'jZgOvsexafxJUlU3WHaMfA==';

jest.mock('../../../service', () => {
  return {
    decodeEncodedPhone: jest.fn(),
  };
});

// jest.mock('../../shared/service/index.ts', () => {
//   return {
//     decodePhone: jest.fn().mockImplementationOnce(() => Promise.resolve(`13820003000`)),
//   };
// });

describe('🧪 DecodePhone', () => {
  testMount(DecodePhone);

  it('EncodePhoneModel.decodeEncodedPhone方法mock正确', async () => {
    (decodeEncodedPhone as jest.Mocked<any>).mockResolvedValue('13058003200');
    const newPhone = new EncodePhoneModel(testee);
    const result = await newPhone.decode();
    sleep(100);
    expect(result).toBe('13058003200');
  });

  it('点击时发送解码请求', async () => {
    (decodeEncodedPhone as jest.Mocked<any>).mockResolvedValue('{ "phone_number": "13058003200" }');
    const onReady = jest.fn();
    const wrapper = mount(
      <DecodePhone params={params} onReady={onReady}>
        <span id="phone">{testee}</span>
      </DecodePhone>,
    );

    wrapper.setProps({ onReady });
    await act(async () => {
      wrapper
        .find('#phone')
        .at(0)
        .simulate('click');
    });
    expect(onReady).toHaveBeenCalledWith('13058003200');
  });

  it('点击更多的时候，不会再发送多余请求', async () => {
    (decodeEncodedPhone as jest.Mocked<any>).mockResolvedValue('{ "phone_number": "13058003200" }');
    const onReady = jest.fn();
    const wrapper = mount(
      <DecodePhone params={params} onReady={onReady}>
        <span id="phone">{testee}</span>
      </DecodePhone>,
    );
    const target = wrapper.find('#phone').at(0);

    wrapper.setProps({ onReady });
    await act(async () => {
      target.simulate('click');
    });
    await act(async () => {
      target.simulate('click');
    });
    await act(async () => {
      target.simulate('click');
    });
    sleep(100);
    expect(document.getElementsByClassName('ant-tooltip-inner')[0].innerHTML).toBe('13058003200');
  });
});
