import React, { Component } from 'react';
import { testMount, testSnapshot, sleep } from '../../../../../tests';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import DarkThemeToggler, { preloadDarkThemeCss } from '..';

describe('🧪 DarkThemeToggler', () => {
  testMount(DarkThemeToggler);
  testSnapshot(DarkThemeToggler);

  test('light主题显示正常', () => {
    const wrapper = mount(<DarkThemeToggler />);
    expect(wrapper.find('button.ant-switch-checked').length).toBe(1);
  });

  test('dark主题显示正常', () => {
    const wrapper = mount(<DarkThemeToggler initialTheme="dark" />);
    expect(wrapper.find('button.ant-switch-checked').length).toBe(0);
  });

  test('theme正确切换，且onChange执行，资源加载成功', async () => {
    const changeHandler = jest.fn();
    const wrapper = mount(<DarkThemeToggler onChange={changeHandler} />);

    expect(changeHandler).toBeCalledWith('light');

    await act(async () => {
      wrapper.simulate('click');
    });

    expect(changeHandler).toBeCalledWith('dark');
    expect(document.getElementsByTagName('link').length).toBe(1);
  });
});
