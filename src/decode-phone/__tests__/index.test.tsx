import React from 'react';
import { testMount, testSnapshot } from '../../../tests';
import DecodePhone from '..';
import { mount } from 'enzyme';

describe('🧪 DecodePhone', () => {
  testMount(DecodePhone);
  testSnapshot(DecodePhone);

  it('Snapshot', () => {
    const wrapper = mount(
      <DecodePhone params="jZgOvsexafxJUlU3WHaMfA==">
        <span id="phone">155****1234</span>
      </DecodePhone>,
    );
    const div = wrapper.find('#phone').at(0);
    div.simulate('click');
    expect(wrapper.find('.ant-tooltip-inner').getDOMNode().innerHTML).not.toEqual(/加载中/);
  });
});
