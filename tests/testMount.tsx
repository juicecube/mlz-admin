import React from 'react';
import { mount } from 'enzyme';

const testMount = (ElementName, props = {} as any) => {
  const { children, ...others } = props;
  describe(`full rendering test`, () => {
    //
    test(`正确地挂载/卸载`, () => {
      const wrapper = mount(<ElementName>{children}</ElementName>);
      expect(() => {
        wrapper.setProps(others);
        wrapper.unmount();
      }).not.toThrow();
    });
  });
};

export default testMount;
