import React from 'react';
import { mount } from 'enzyme';

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
