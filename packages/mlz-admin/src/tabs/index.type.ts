// <reference types="react" />
import { TabsProps } from 'antd/lib/tabs';
import React from 'react';

export type TTabPaneInfo = {
  key: string | number;
  title: string;
};
export interface ITabsProp extends Omit<TabsProps, 'contextMenu' | 'onContextMenuCapture'> {
  contextMenu: React.ReactElement;
  onContextMenuCapture?(tab: TTabPaneInfo, e: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
  onContextMenuVisibleChange?(visible: boolean): void;
}
