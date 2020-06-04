import React from 'react';
import { mount } from 'enzyme';

/**
 * 测试组件挂载成功与否
 * @param {*} Component
 */
const testMount = (Component) => {
  describe(`common test - mounting`, () => {
    //
    test(`正确地挂载`, () => {
      const wrapper = mount(<Component />);
      expect(() => {
        wrapper.unmount();
      }).not.toThrow();
    });
  });
};
export default testMount;
