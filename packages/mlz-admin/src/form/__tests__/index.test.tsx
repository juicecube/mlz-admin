import React, { Component } from 'react';
import { mount } from 'enzyme';
import { testMount, testSnapshot, sleep } from '../../../../../tests';
import { Input, InputNumber, DatePicker, Select } from '../..';
import { act } from 'react-dom/test-utils';
import Form from '..';

const columns = [
  {
    label: '群发内容',
    name: 'smsContent',
    itemProps: { rules: [{ required: true, message: '必须填写"群发内容"' }] },
    render: <Input.TextArea />,
  },
  {
    label: '短信数量',
    name: 'smsNum',
    render: <InputNumber min={1} />,
    itemProps: { rules: [{ required: true, message: '必须填写"短信数量"' }], style: { marginTop: 50 }, tooltip: '自定义了marginTop: 50的样式' },
  },
  {
    label: '费用日期',
    name: 'costPeriod',
    itemProps: { rules: [{ required: true, message: '必须填写"费用日期"' }] },
    render: () => <DatePicker mode="date" />,
  },
];
describe('🧪 Form', () => {
  testMount(Form);
  testSnapshot(Form, { staticRendered: true, columns });

  it('根据columns自动渲染表单', () => {
    const wrapper = mount(<Form.Block columns={columns} />);
    expect(wrapper.find('textarea#smsContent').length).toBe(1);
    expect(wrapper.find('InputNumber').length).toBe(1);
    expect(wrapper.find('DatePicker').length).toBe(1);
  });

  it('根据column的replyOn字段动态渲染表单项', async () => {
    const wrapper = mount(
      <Form.Block
        columns={[
          {
            label: '支付方式',
            name: 'afford',
            render: (
              <Select defaultOpen autoFocus>
                <Select.Option value={1}>按投放效果付费</Select.Option>
                <Select.Option value={2}>先行付费</Select.Option>
              </Select>
            ),
          },
          {
            label: '支付费用',
            name: 'cost',
            render: <InputNumber min={1} />,
            relyOn: [{ name: 'afford', toContain: [2] }],
          },
          {
            label: '费用日期',
            name: 'costPeriod',
            render: () => <DatePicker mode="date" />,
          },
        ]}
      />,
    );
    const selectOptions = wrapper.find('div.ant-select-item-option');
    await act(async () => {
      selectOptions.at(1).simulate('click');
    });
    wrapper.update();
    expect(wrapper.find('div.ant-select-selector').length).toBe(1);
    expect(wrapper.find('InputNumber').length).toBe(1);
  });

  it('传入initialValue初始值渲染正确，且交互正常', async () => {
    const wrapper = mount(
      <Form.Block
        columns={[
          {
            label: '支付方式',
            name: 'afford',
            render: (
              <Select defaultOpen autoFocus>
                <Select.Option value={1}>按投放效果付费</Select.Option>
                <Select.Option value={2}>先行付费</Select.Option>
              </Select>
            ),
          },
          {
            label: '支付费用',
            name: 'cost',
            render: <InputNumber min={1} />,
            relyOn: [{ name: 'afford', toContain: [2] }],
          },
        ]}
        initialValues={{
          afford: 2,
          cost: 65,
        }}
      />,
    );
    const selectOptions = wrapper.find('div.ant-select-item-option');
    expect(selectOptions.at(1).hasClass('ant-select-item-option-selected')).toBeTruthy();
    expect(wrapper.find('InputNumber').prop('value')).toBe(65);

    await act(async () => {
      selectOptions.at(0).simulate('click');
    });
    wrapper.update();
    expect(wrapper.find('div.ant-select-selector').length).toBe(1);
    expect(wrapper.find('InputNumber').length).toBe(0);
  });

  it('点击提交/重置按钮后的回调和交互正常', async () => {
    const onResetHandler = jest.fn();

    const wrapper = mount(
      <Form.Block
        columns={[
          {
            label: '支付费用',
            name: 'cost',
            render: <InputNumber />,
          },
        ]}
        initialValues={{
          cost: 65,
        }}
        onReset={onResetHandler}
      />,
    );

    const resetBtn = wrapper.find('button.form-block-reset-btn');
    resetBtn.simulate('click');
    expect(wrapper.find('InputNumber').prop('value')).toBe('');
    expect(onResetHandler).toHaveBeenCalledWith({ cost: 65 });
  });
});
