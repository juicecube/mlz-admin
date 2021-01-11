import React from 'react';
import { Tabs as AntdTabs } from 'antd';
import { TabsProps } from 'antd/lib/tabs';
import { createBem } from '../shared/utils';
import './index.less';

const bem = createBem('tabs');
const Tabs = React.cloneElement(<AntdTabs />, { className: bem('wrapper') });
export default AntdTabs;
