import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import enUS from 'antd/es/locale/en_US';
import ConfigProvider from '..';

describe('📦  ConfigProvider', () => {
  testMount(ConfigProvider, {
    locale: enUS,
  });
  testSnapshot(ConfigProvider, {
    staticRendered: true,
    locale: enUS,
  });
});
