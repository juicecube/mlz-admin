import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import enUS from 'antd/es/locale/en_US';
import ConfigProvider from '..';

describe('🧪 ConfigProvider', () => {
  testMount(ConfigProvider, {
    locale: enUS,
  });
  testSnapshot(ConfigProvider, {
    staticRendered: true,
    locale: enUS,
  });
});
