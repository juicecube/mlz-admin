import React, { Component } from 'react';
import { mount } from 'enzyme';
import enUS from 'antd/es/locale/en_US';
import { testMount, testSnapshot, sleep } from '../../../tests';
import ConfigProvider from '..';

describe('🧪 ConfigProvider', () => {
  testMount(ConfigProvider, {
    locale: enUS,
  });
  testSnapshot(ConfigProvider, {
    staticRendered: true,
    locale: enUS,
  });

  // 打印版本号
  it('正确打印版本号', async () => {
    mount(<ConfigProvider />);
    expect(window.__MLZ_ADMIN_VERSION__).not.toBe('');
  });
});
