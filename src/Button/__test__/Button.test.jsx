import React, { Component } from 'react';
import { act } from 'react-dom/test-utils';
import { mount, instance, shallow } from 'enzyme';
import Button from '../Button';
import { Dropdown } from 'antd';
import Menu from '../../Menu/Menu';
import testMount from '../../../tests/testMount';

const menuList = [
  {
    key: 1,
    text: '毛血旺',
    value: '毛血旺',
    iconType: 'gutline_add',
  },
  {
    key: 2,
    text: '水煮鱼',
    value: '水煮鱼',
    iconType: 'gutline_add',
  },
  {
    key: 3,
    text: '红烧肉',
    value: '红烧肉',
    iconType: 'gutline_add',
  },
];

const groupList = [
  {
    key: 1,
    text: '菜单1',
    value: 1,
    leftIconType: 'round_left_g',
  },
  {
    key: 2,
    text: '菜单2',
    value: 2,
    type: 'default',
  },
  {
    key: 3,
    text: '菜单3',
    value: 3,
    rightIconType: 'round_right_g',
  },
];

describe('📦 Button', () => {
  /**
   * @FIRST 挂载
   */
  testMount(Button);
  testMount(() => <Button menu={menuList} />);
  testMount(() => <Button group={groupList} />);
  /**
   * 因为antd>=4已经不推荐支持button.group的使用方式
   * 所以后面是可能取消掉该api的，所以我们应该写这个功能点的测试
   */
  testMount(() => (
    <Button.Group>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Button.Group>
  ));

  /**
   * @SECOND 扩展属性
   */
  // type属性是否还可以控制按钮样式
  test('props.type rendered correctly', () => {
    [
      {
        type: 'default',
        value: false,
      },
      {
        type: 'primary',
        value: true,
      },
    ].forEach((opt) => {
      const wrapper = mount(<Button type={opt.type}>测试</Button>);
      expect(wrapper.find('.ant-btn').hasClass('ant-btn-primary')).toBe(opt.value);
    });
  });

  /**
   * @THIRD 事件/属性正确地触发/生效
   */
  // 使用menu可以
  test('onClick should be called within a composed params when using menu prop', () => {
    jest.useFakeTimers();

    const onClickFn = jest.fn();
    const wrapper = mount(<Button onClick={onClickFn} menu={menuList} />);
    wrapper.simulate('mouseenter');
    const dropdownWrapper = wrapper.find(Dropdown);
    const menuWrapper = dropdownWrapper.props().overlay;
    const menuWrapperInstance = mount(menuWrapper);
    menuWrapperInstance.simulate('mouseenter');

    act(() => {
      jest.runAllTimers();
    });
    menuWrapperInstance.update();
    wrapper.update();

    expect(menuWrapperInstance.length).toBe(1);
    expect(menuWrapperInstance.find('li.ant-dropdown-menu-item').length).toBe(3);
    // console.log(menuItemWrappers);
    // const menuItemWrappers = menuWrapperInstance.find('.ant-dropdown-menu-item');
    // expect(menuItemWrappers.length).toBe(3);

    // const menuItemWrappers = dropdownWrapper.find('.ant-dropdown-menu-item');
    // console.log(menuItemWrappers.length, 2);
    // expect(menuItemWrappers.length).toBe(3);
    // menuItemWrappers.at(0).simulate('click');
    // expect(onClickFn).toHaveBeenCalled();
    jest.useRealTimers();
  });

  // onClick在menu/group属性存在时会成为合成事件被唤起，且参数正确
  test('onClick should be called within a composed params when using group prop', () => {
    const onClickFn = jest.fn();
    const wrapper = mount(<Button onClick={onClickFn} />);
  });
});
