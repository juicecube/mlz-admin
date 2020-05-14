import React, { useState, useContext } from 'react';
import { Button as AntdBUtton } from 'antd';
import 'antd/es/button/style/index.css';
import { CommonButtonTypes as CBTs } from './index.d';
import { extend } from 'lodash-es';

class Button extends React.PureComponent {
  static Group = {};
  render() {
    return <AntdBUtton type="primary">1234</AntdBUtton>;
  }
}

export default Button;
