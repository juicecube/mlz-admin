import React, { useState, useContext } from 'react';
import { Button as AntdButton, Dropdown, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu/index.d';
import 'antd/es/button/style/index.css';
import { default as AntdButtonGroup } from 'antd/es/button/button-group';
import { omitObject } from '@/shared/utils';
import Icon from '@/Icon/Icon';
import { CommonButtonTypes as CBTs } from './index.d';

const calcValues = ($menuClickEvent: ClickParam, $menu: CBTs.MenuType[]): CBTs.ButtonGroupPropableValue | CBTs.ButtonGroupPropableValue[] => {
  const identifier = 'no value/@mlz-admin/identifier';
  const values = $menu.reduce((prev: CBTs.ButtonGroupPropableValue | CBTs.ButtonGroupPropableValue[], curr) => {
    // 必须使用特定的字符串，而不是null或undefined，因为
    // 用户可能想要的值就是它们
    return prev.concat([curr.key == $menuClickEvent.key ? curr.value : identifier]);
  }, []);
  const result = values.filter((item: CBTs.ButtonGroupPropableValue) => item !== identifier);
  return result.length === 0 ? undefined : result.length === 1 ? result[0] : result;
};
const Button = (props: CBTs.ButtonTypes): React.ReactElement => {
  const { group, menu } = props;
  return !group ? (
    !menu ? (
      <AntdButton {...props}>{props.children}</AntdButton>
    ) : (
      <Dropdown
        overlay={
          <Menu onClick={(e: ClickParam) => props.onChange && props.onChange(calcValues(e, menu))}>
            {menu?.map((item, index) => {
              return (
                <Menu.Item key={item.key || index} icon={item.iconType ? <Icon type={item?.iconType} /> : undefined}>
                  {item.text}
                </Menu.Item>
              );
            })}
          </Menu>
        }>
        <Button>{props.children}</Button>
      </Dropdown>
    )
  ) : (
    <AntdButtonGroup>
      {group?.map((item: CBTs.GroupType, index: number) => {
        return (
          <AntdButton
            key={item.key || index}
            {...omitObject(props, ['size', 'style', 'className', 'prefixCls'])}
            onClick={(e) => {
              item.onClick && item.onClick(e);
              props.onChange && props.onChange(item.value || undefined);
            }}
            type={item.type || props.type}>
            {item.leftIconType ? <Icon type={item?.leftIconType} /> : null}
            {item.text}
            {item.rightIconType ? <Icon type={item?.rightIconType} /> : null}
          </AntdButton>
        );
      })}
    </AntdButtonGroup>
  );
};

Button.Group = AntdButtonGroup;
export default Button;
