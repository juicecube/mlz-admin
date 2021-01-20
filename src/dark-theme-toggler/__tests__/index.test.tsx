import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import { mount } from 'enzyme';
import DarkThemeToggler, { preloadDarkThemeCss } from '..';

// jest.mock('..', () => {
//   return {
//     preloadDarkThemeCss: jest.fn().mockImplementationOnce(() => {
//       const domNode = document.createElement('link');
//       domNode.setAttribute('href', 'https://www.baidu.com');
//       domNode.setAttribute('type', 'text/css');
//       document.body.appendChild(domNode);
//     }),
//   };
// });

describe('🧪 DarkThemeToggler', () => {
  testMount(DarkThemeToggler);
  testSnapshot(DarkThemeToggler);

  /**
   * 显示正常的测试定义是：
   *    1. 正常加载了对应css资源(异步请求取得了正确结果)
   *    2. switch按钮表现正常
   */
  test('light主题显示正常', () => {
    const wrapper = mount(<DarkThemeToggler />);
    expect(wrapper.find('button.ant-switch-checked').length).toBe(1);
  });

  test('dark主题显示正常', () => {
    const wrapper = mount(<DarkThemeToggler initialTheme="dark" />);
    expect(wrapper.find('button.ant-switch-checked').length).toBe(0);
  });

  // theme正确切换，且onChange执行
});
