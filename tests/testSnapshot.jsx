import React from 'react';
import { render, mount } from 'enzyme';

const testSnapshot = (Component, props = {}) => {
  const { staticRendered, ...others } = props;
  describe(`snapshot test`, () => {
    //
    test(`snapshot comparing`, () => {
      const wrapper = staticRendered === true ? render(<Component {...others} />) : mount(<Component {...others} />).render();
      expect(wrapper.toString()).toMatchSnapshot();
    });
  });
};

export default testSnapshot;
