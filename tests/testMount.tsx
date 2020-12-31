import React from 'react';
import { mount } from 'enzyme';

const testMount = (ElementName, props = {}) => {
  describe(`full rendering test`, () => {
    //
    test(`正确地挂载/卸载`, () => {
      const wrapper = mount(<ElementName />);
      expect(() => {
        wrapper.setProps(props);
        wrapper.unmount();
      }).not.toThrow();
    });
  });
};

export default testMount;
