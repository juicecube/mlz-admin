import React from 'react';
import { Button as AntdButton } from 'antd';
import { omitProps } from 'mytils';
import Icon from '../icon';
import { GroupType, IButtonProps } from './index.type';

const InternalButton: React.ForwardRefRenderFunction<unknown, IButtonProps> = (props: IButtonProps, ref): React.ReactElement => {
  const { group } = props;
  return !group ? (
    <AntdButton {...props}>{props.children}</AntdButton>
  ) : (
    <AntdButton.Group>
      {group?.map((item: GroupType, index: number) => {
        return (
          <AntdButton
            key={item.key || index}
            {...omitProps(['size', 'style', 'className', 'prefixCls', 'group', 'onClick'], props)}
            onClick={(e) => props.onClick?.({ ...e, ...{ value: group[index].value } })}
            type={item.type || props.type}>
            {item.leftIconType ? <Icon type={item?.leftIconType} /> : null}
            {item.text}
            {item.rightIconType ? <Icon type={item?.rightIconType} /> : null}
          </AntdButton>
        );
      })}
    </AntdButton.Group>
  );
};

interface compositedComponent extends React.ForwardRefExoticComponent<IButtonProps & React.RefAttributes<HTMLElement>> {
  Group: typeof AntdButton.Group;
}

const Button = React.forwardRef(InternalButton);
(InternalButton as compositedComponent).Group = AntdButton.Group;
export default Button;
