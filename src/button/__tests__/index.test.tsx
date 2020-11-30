import React, { Component } from 'react';
import { mount } from 'enzyme';
import Button from '..';
import { testMount, testSnapshot } from '../../../tests';
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
] as const;

describe('🧪 Button', () => {
  /**
   * @FIRST 挂载 / 快照测试（一定程度上防止圣诞节彩蛋等底层dom修改..）
   */
  testMount(Button);
  testSnapshot(Button);

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
    ([
      {
        type: 'default',
        value: false,
      },
      {
        type: 'primary',
        value: true,
      },
    ] as const).forEach((opt) => {
      const wrapper = mount(<Button type={opt.type}>测试</Button>);
      expect(wrapper.find('.ant-btn').hasClass('ant-btn-primary')).toBe(opt.value);
    });
  });

  /**
   * @THIRD 事件/属性正确地触发/生效
   */
  test('onClick should be called within a composed params when using group prop', () => {
    const onClickFn = jest.fn();
    const wrapper = mount(<Button onClick={onClickFn} group={groupList} />);
    const btns = wrapper.find('.ant-btn');
    expect(btns.length).toBe(groupList.length);
    btns.at(0).simulate('click');
    expect(onClickFn).toHaveBeenCalled();
  });
});
