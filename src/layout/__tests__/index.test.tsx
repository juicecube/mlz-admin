import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import { mount } from 'enzyme';
import Layout, { ContentProps } from '..';

const { Header, Content, Footer } = Layout;
const WrapperCore = (props?: ContentProps) => (
  <Layout>
    <Header />
    <Content {...props}>
      <div>View Contents</div>
    </Content>
    <Footer>@mlz/admin &copy; 2020</Footer>
  </Layout>
);
describe('🧪 Layout', () => {
  testMount(WrapperCore);
  testSnapshot(WrapperCore);

  test('默认在Content带ErrorBoundary', () => {
    const wrapper = mount(<WrapperCore />);
    expect(wrapper.find('ErrorBoundary').length).toBe(1);
  });

  test('关闭ErrorBoundary', () => {
    const wrapper = mount(<WrapperCore errorBoundary={false} />);
    expect(wrapper.find('ErrorBoundary').length).toBe(0);
  });
});
