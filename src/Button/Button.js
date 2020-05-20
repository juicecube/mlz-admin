import React from 'react';
import { Button as AntdButton, Dropdown, Menu } from 'antd';
import { default as AntdButtonGroup } from 'antd/es/button/button-group';
import { omitObject } from '@/shared/utils';
import Icon from '@/Icon/Icon';
import 'antd/es/button/style/index.css';
const calcValues = ($menuClickEvent, $menu) => {
  const identifier = 'no value/@mlz-admin/identifier';
  const values = $menu.reduce((prev, curr) => {
    return prev.concat([curr.key.toString() === $menuClickEvent.key ? curr.value : identifier]);
  }, []);
  const result = values.filter((item) => item !== identifier);
  return result.length === 0 ? undefined : result.length === 1 ? result[0] : result;
};
const Button = (props) => {
  const { group, menu } = props;
  return !group
    ? !menu
      ? React.createElement(AntdButton, Object.assign({}, props), props.children)
      : React.createElement(
          Dropdown,
          {
            overlay: React.createElement(
              Menu,
              { onClick: (e) => props.onChange && props.onChange(calcValues(e, menu)) },
              menu?.map((item, index) => {
                return React.createElement(Menu.Item, { key: item.key || index, icon: item.iconType ? React.createElement(Icon, { type: item?.iconType }) : undefined }, item.text);
              }),
            ),
          },
          React.createElement(Button, null, props.children),
        )
    : React.createElement(
        AntdButtonGroup,
        null,
        group?.map((item, index) => {
          return React.createElement(
            AntdButton,
            Object.assign({ key: item.key || index }, omitObject(props, ['size', 'style', 'className', 'prefixCls']), {
              onClick: (e) => {
                item.onClick && item.onClick(e);
                props.onChange && props.onChange(item.value || undefined);
              },
              type: item.type || props.type,
            }),
            item.leftIconType ? React.createElement(Icon, { type: item?.leftIconType }) : null,
            item.text,
            item.rightIconType ? React.createElement(Icon, { type: item?.rightIconType }) : null,
          );
        }),
      );
};
Button.Group = AntdButtonGroup;
export default Button;
//# sourceMappingURL=Button.js.map
