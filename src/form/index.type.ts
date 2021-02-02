import React from 'react';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { FormProps } from 'antd/lib/form/Form';
import { RowProps } from 'antd/lib/row/index';
import { NamePath } from 'rc-field-form/es/interface';
import { Form as AntdForm } from 'antd';

export interface IDependencyItem {
  name: string;
  toContain: Omit<NamePath, 'InternalNamePath'>[];
}
export interface IFormColumnType extends Omit<FormItemProps<unknown>, 'name'> {
  name: NamePath;
  // Item的文字描述
  label?: string;
  render?: React.ReactNode;
  itemProps?: FormItemProps;
  relyOn?: IDependencyItem[];
}

export interface IFormProps extends FormProps<unknown> {
  loading?: boolean;
  //
  initialValues?: object;
  // formlist，类似table的columns，用于摆放数据
  columns: IFormColumnType[];
  // 重置表单事件
  onReset?: (initValues: object) => void;
  // 重置按钮文字描述
  resetText?: string;
  // 提交按钮文字描述
  confirmText?: string;
  // 提交表单按钮区的属性
  submitterProps?: RowProps;
}
export type AntdFormType = typeof AntdForm;
export interface CompoundedForm extends AntdFormType {
  Block?: React.FC<IFormProps>;
}
