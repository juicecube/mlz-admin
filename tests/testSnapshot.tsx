import React from 'react';
import { render, mount } from 'enzyme';

const testSnapshot = (Component, props?: { staticRendered?: boolean; [key: string]: any }) => {
  const { staticRendered, children, ...others } = props || {};
  describe(`snapshot test`, () => {
    //
    test(`快照匹配`, () => {
      const wrapper = staticRendered === true ? render(<Component {...others}>{children}</Component>) : mount(<Component {...others}>{children}</Component>).render();
      expect(wrapper.toString()).toMatchSnapshot();
    });
  });
};

export default testSnapshot;
