import React, { Component } from 'react';
import { testMount } from '../../../../../../tests';
import { mount } from 'enzyme';
import CommonSearch from '..';
import Button from '../../../button';

describe('🧪 CommonSearch', () => {
  testMount(CommonSearch);

  test('支持控件，全部能够渲染出对应的搜索组件', () => {
    const oneRepeatedAssetion = (wrapper) => wrapper.find('.ant-picker-input').length;
    const theAnohterAssetion = (wrapper) => wrapper.find('form.admini-common-search__form').find('input.ant-input-number-input').length;

    const supporttings = [
      {
        title: 'normal类型用默认的Input',
        dataIndex: 'normal',
        searchable: true,
        assert: (wrapper) => wrapper.find('form.admini-common-search__form').find('input.ant-input').length,
        exp: 1,
      },
      {
        title: 'number类型用InputNumber',
        dataIndex: 'number',
        type: 'number',
        searchable: true,
        assert: (wrapper) => wrapper.find('form.admini-common-search__form').find('input.ant-input-number-input').length,
        exp: 3,
      },
      {
        title: 'date类型用DatePicker',
        dataIndex: 'date',
        type: 'date',
        searchable: true,
        assert: (wrapper) => oneRepeatedAssetion(wrapper),
        // datepicker的2个，datepicker.ranger的4个
        exp: 6,
      },
      {
        title: 'datetime类型用DatePicker',
        dataIndex: 'datetime',
        type: 'datetime',
        searchable: true,
        assert: (wrapper) => oneRepeatedAssetion(wrapper),
        exp: 6,
      },
      {
        title: 'dateRange类型用DatePicker',
        dataIndex: 'dateRange',
        type: 'dateRange',
        searchable: true,
        assert: (wrapper) => oneRepeatedAssetion(wrapper),
        exp: 6,
      },
      {
        title: 'datetimeRange类型用DatePicker',
        dataIndex: 'datetimeRange',
        type: 'datetimeRange',
        searchable: true,
        assert: (wrapper) => oneRepeatedAssetion(wrapper),
        exp: 6,
      },
      {
        title: 'price类型用InputNumber',
        dataIndex: 'price',
        type: 'price',
        searchable: true,
        assert: (wrapper) => theAnohterAssetion(wrapper),
        exp: 3,
      },
      {
        title: 'ratio类型用InputNumber',
        dataIndex: 'ratio',
        type: 'ratio',
        searchable: true,
        assert: (wrapper) => theAnohterAssetion(wrapper),
        exp: 3,
      },
      {
        title: 'tag类型用Select',
        dataIndex: 'tag',
        type: 'tag',
        searchable: true,
        enums: {
          all: { text: '全部', color: 'magenta' },
          close: { text: '售罄', color: 'red' },
        },
        assert: (wrapper) => wrapper.find('form.admini-common-search__form').find('input.ant-select-selection-search-input').length,
        exp: 3,
      },
      {
        title: 'enum类型也用Select',
        dataIndex: 'enum',
        type: 'enum',
        searchable: true,
        enums: {
          all: { text: '全部', color: 'magenta' },
          close: { text: '售罄', color: 'red' },
        },
        assert: (wrapper) => wrapper.find('form.admini-common-search__form').find('input.ant-select-selection-search-input').length,
        exp: 3,
      },
      {
        title: 'enum类型也用Select，但是enums是string类型，而非object',
        dataIndex: 'enum',
        type: 'enum',
        searchable: true,
        enums: {
          all: '全部',
          close: '售罄',
        },
        assert: (wrapper) => wrapper.find('form.admini-common-search__form').find('input.ant-select-selection-search-input').length,
        exp: 3,
      },
    ];

    const wrapper = mount(<CommonSearch columns={supporttings} />);

    supporttings.forEach((item) => {
      expect(item.assert ? item.assert(wrapper) : 1).toBe(item.assert ? item.exp : 1);
    });
  });

  test('重置/提交表单时时正确触发onSearch事件', () => {
    const searchHandler = jest.fn();
    const columns = [
      {
        title: 'normal',
        dataIndex: 'normal',
        type: 'normal',
        searchable: true,
      },
      {
        title: 'number',
        dataIndex: 'number',
        type: 'number',
        searchable: true,
      },
    ];
    const wrapper = mount(<CommonSearch columns={columns} onSearch={searchHandler} />);
    wrapper
      .find('.admini-common-search__form')
      .find('.ant-btn')
      .at(0)
      .simulate('click');
    expect(searchHandler).toBeCalledTimes(1);
    wrapper
      .find('.admini-common-search__form')
      .find('.ant-btn-primary')
      .simulate('click');
    expect(searchHandler).toBeCalledTimes(1);
  });

  test('操作栏和工具栏，均渲染正确', () => {
    const columns = [
      {
        title: 'normal',
        dataIndex: 'normal',
        type: 'normal',
        searchable: true,
      },
    ];
    const wrapper = mount(
      <CommonSearch
        columns={columns}
        operations={[
          <Button key={1} className="mounted-operation-btn">
            批量通知
          </Button>,
        ]}
        tools={[
          <Button key={2} className="mounted-tool-btn">
            批量上传
          </Button>,
        ]}
      />,
    );
    expect(wrapper.find('button.mounted-operation-btn').length).toBe(1);
    expect(wrapper.find('button.mounted-tool-btn').length).toBe(1);
  });

  test('点击重置按钮，正确触发对应行为', () => {
    const resetHandler = jest.fn();
    const searchHandler = jest.fn();
    const columns = [
      {
        title: 'normal',
        dataIndex: 'normal',
        type: 'normal',
        searchable: true,
      },
    ];
    const wrapper = mount(<CommonSearch columns={columns} onReset={resetHandler} onSearch={searchHandler} />);
    wrapper
      .find('.admini-common-search__form')
      .find('.ant-btn')
      .at(0)
      .simulate('click');
    expect(resetHandler).toBeCalledTimes(1);
    expect(searchHandler).toBeCalledTimes(1);
  });

  test('设置搜索项数目上限正确', () => {
    const columns = [
      {
        title: 'normal',
        dataIndex: 'normal',
        type: 'normal',
        searchable: true,
      },
      {
        title: 'number',
        dataIndex: 'number',
        type: 'number',
        searchable: true,
      },
      {
        title: 'ratio',
        dataIndex: 'ratio',
        type: 'ratio',
        searchable: true,
      },
    ];
    const wrapper = mount(<CommonSearch columns={columns} searchCollapsedThreshold={2} />);
    const theToggleBtn = wrapper.find('button.toggle-search-count-btn');
    expect(wrapper.find('form.admini-common-search__form').find('input').length).toBe(3);
    theToggleBtn.simulate('click');
    expect(
      (wrapper
        .find('.admini-common-search__search-item')
        .first()
        .getDOMNode() as any).style.display,
    ).toBe('block');
    expect(
      (wrapper
        .find('.admini-common-search__search-item')
        .last()
        .getDOMNode() as any).style.display,
    ).toBe('none');
  });
});
