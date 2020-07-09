import React, { useState, useContext } from 'react';
import { Button as AntdButton, Dropdown } from 'antd';
import Menu from '@/Menu/Menu';
import { ClickParam } from 'antd/lib/menu/index.d';
import { default as AntdButtonGroup } from 'antd/es/button/button-group';
import { omitProps } from 'mytils';
import Icon from '../Icon/Icon';
import { MenuType, GroupType, IButtonProps, ButtonGroupPropableValue } from './Button.type';

const InternalButton: React.ForwardRefRenderFunction<unknown, IButtonProps> = (props: IButtonProps, ref): React.ReactElement => {
  const { group } = props;
  return !group ? (
    <AntdButton {...props}>{props.children}</AntdButton>
  ) : (
    <AntdButtonGroup>
      {group?.map((item: GroupType, index: number) => {
        return (
          <AntdButton
            key={item.key || index}
            {...omitProps(['size', 'style', 'className', 'prefixCls', 'group', 'onClick'], props)}
            onClick={(e) => props?.onClick?.({ ...e, ...{ value: group[index].value } })}
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

interface compositedComponent extends React.ForwardRefExoticComponent<IButtonProps & React.RefAttributes<HTMLElement>> {
  Group: typeof AntdButtonGroup;
}
const Button = React.forwardRef(InternalButton);
(Button as compositedComponent).Group = AntdButtonGroup;
export default Button;
