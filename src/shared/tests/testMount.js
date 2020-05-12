import React from 'react';
import { mount } from 'enzyme';

const testMount = (Component) => {
  describe(`common test - mounting`, () => {
    //
    test(`mount successfully`, () => {
      const wrapper = mount(<Component />);
      expect(() => {
        wrapper.setProps({});
        wrapper.unmount();
      }).not.toThrow();
    });
  });
};
export default testMount;