import React from 'react';
import { testMount, testSnapshot, getNodeRef } from '../../../tests';
import DecodePhone from '..';
import { mount } from 'enzyme';

describe('🧪 DecodePhone', () => {
  testMount(DecodePhone);
  testSnapshot(DecodePhone);

  it('snapshot', () => {
    const wrapper = mount(
      <DecodePhone params="jZgOvsexafxJUlU3WHaMfA==">
        <span id="phone">155****1234</span>
      </DecodePhone>,
    );
    const div = wrapper.find('#phone').at(0);
    div.simulate('click');
    expect(getNodeRef(wrapper, '.ant-tooltip-inner').innerHTML).not.toEqual(/加载中/);
  });

  it('second click will not do request', () => {
    const theOnChangeInRC = jest.spyOn(console, 'log');
    const wrapper = mount(
      <DecodePhone params="jZgOvsexafxJUlU3WHaMfA==">
        <span id="phone">155****1234</span>
      </DecodePhone>,
    );
    const div = wrapper.find('#phone').at(0);
    div.simulate('click');
    expect(theOnChangeInRC).toHaveBeenCalledTimes(1);
    div.simulate('click');
    div.simulate('click');
    expect(theOnChangeInRC).toHaveBeenCalledTimes(1);
  });
});
