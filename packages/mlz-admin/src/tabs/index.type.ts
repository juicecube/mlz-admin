// <reference types="react" />
import React from 'react';
import { TabsProps, TabPaneProps } from 'antd/lib/tabs';

export interface ITabsProp extends TabsProps {
  contextManu?: React.ReactNode;
}
