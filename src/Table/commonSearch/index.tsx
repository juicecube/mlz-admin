import React, { useState, useContext } from 'react';
import { Table, Tooltip, Tag, ConfigProvider } from 'antd';
import { formatUnixTime } from 'mytils';
import { formatPrice, guessPrimaryKey, createBem } from '@/shared/utils';
import { ICommonSearch } from './index.type';
import './index.less';

const CommonSearch = (props: ICommonSearch<any>) => {
  return <div>1234</div>;
};
export default CommonSearch;
