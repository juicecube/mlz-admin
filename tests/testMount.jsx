import React from 'react';
import { mount } from 'enzyme';

const testMount = (Component, props = {}) => {
  describe(`full rendering test`, () => {
    //
    test(`正确地挂载/卸载`, () => {
      const wrapper = mount(<Component />);
      expect(() => {
        wrapper.setProps(props);
        wrapper.unmount();
      }).not.toThrow();
    });
  });
};

export default testMount;
