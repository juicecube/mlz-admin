import React from 'react';
import { Button as AntdButton } from 'antd';
import { omitProps } from 'mytils';
import { GroupType, IButtonProps } from './index.type';

const InternalButton: React.ForwardRefRenderFunction<HTMLElement | null, IButtonProps> = (props: IButtonProps, ref): React.ReactElement => {
  const { group } = props;
  return !group ? (
    <AntdButton {...props} ref={ref}>
      {props.children}
    </AntdButton>
  ) : (
    <AntdButton.Group>
      {group?.map((item: GroupType, index: number) => {
        return (
          <AntdButton
            key={item.key || index}
            {...omitProps(['size', 'style', 'className', 'prefixCls', 'group', 'onClick'], props)}
            onClick={(e) => props.onClick?.({ ...e, ...{ value: group[index].value } })}
            type={item.type || props.type}>
            {item.text}
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
(Button as compositedComponent).Group = AntdButton.Group;
export default Button as compositedComponent;
