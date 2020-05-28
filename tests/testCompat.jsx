import React from 'react';
import { mount } from 'enzyme';
import * as Antds from 'antd';

/**
 * 测试mlz-admin的组件是否兼容antd
 * @param {*} Component
 * @param {*} SuperComponent
 */
const testCompat = (Component, SuperComponent = null) => {
  console.log(Component, SuperComponent, Antds);
  describe(`common test - compatible`, () => {
    expect(1 + 1).toBe(2);
  });
};
export default testCompat;
