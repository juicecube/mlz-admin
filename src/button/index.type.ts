// <reference types="react" />
import React from 'react';
import { ButtonProps, ButtonType } from 'antd/lib/button';

export type ButtonGroupPropableValue = unknown;
export interface GroupType {
  key: string | number;
  text: string;
  value?: ButtonGroupPropableValue;
  type?: ButtonType;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
export type MenuType = { iconType?: string } & Exclude<GroupType, 'type' | 'onClick'>;

export interface IButtonProps extends ButtonProps {
  group?: readonly GroupType[];
}
export type ButtonGroupTypes = {
  children: React.ReactNode;
};
