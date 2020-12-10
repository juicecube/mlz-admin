import React, { useState, useEffect } from 'react';
import { Form as AntdForm, Spin, Button, Row } from 'antd';
import { NamePath } from 'rc-field-form/es/interface';
import { IFormProps, IFormColumnType, IDependencyItem, CompoundedForm } from './index.type';

const Form: CompoundedForm = AntdForm;
Form.Block = (props: IFormProps) => {
  const { loading, initialValues, columns, style, onFinish } = props;
  const [form] = AntdForm.useForm();
  const [forceRefresh, toggleForceRefresh] = useState(false);
  // 所有表单项的所有依赖内容
  const allRelyOnKeys = Array.from(
    new Set(
      columns?.reduce((prev: unknown[], curr: IFormColumnType) => {
        const currRelyOnKeys = curr?.relyOn?.reduce((prv: NamePath[], cur: IDependencyItem) => prv.concat([cur?.name] || []), []);
        return prev.concat(currRelyOnKeys || []);
      }, []),
    ),
  );

  const hasSettled = initialValues && Object.keys(initialValues).length;
  useEffect(() => {
    if (hasSettled) {
      form.setFieldsValue(initialValues);
      toggleForceRefresh(!forceRefresh);
    }
  }, [initialValues]);

  return (
    <Spin spinning={Boolean(loading)}>
      <AntdForm
        onFieldsChange={(changedValues) => {
          // ⚠️ DO NOT RETURN, JUST void
          if (changedValues.length && allRelyOnKeys.includes(changedValues[0]?.name?.[0])) {
            toggleForceRefresh(!forceRefresh);
          }
        }}
        {...{ form, style }}
        {...props}>
        {columns.map((item: IFormColumnType) => {
          const { relyOn, name, label, render } = item;
          const showItem = relyOn ? relyOn?.some((relyOnItem: IDependencyItem) => relyOnItem.toContain?.includes(form.getFieldValue(relyOnItem.name))) : true;
          const component = typeof render === 'function' ? render() : render;
          return showItem ? (
            <AntdForm.Item key={name.toString()} name={name} label={label} labelAlign="left" preserve={false} {...item.itemProps}>
              {component}
            </AntdForm.Item>
          ) : null;
        })}
        <Row justify="end" {...props.submitterProps}>
          {props.resetText !== '' ? (
            <Button
              htmlType="reset"
              className="form-block-reset-btn"
              style={{ marginRight: 8 }}
              onClick={() => {
                if (hasSettled) {
                  const resettedValues = {};
                  Object.keys(initialValues || {}).forEach((key) => {
                    resettedValues[key] = '';
                  });
                  form.setFieldsValue(resettedValues);
                } else {
                  form.resetFields();
                }
                toggleForceRefresh(!forceRefresh);
                props.onReset?.(initialValues || {});
              }}>
              重置
            </Button>
          ) : null}
          {props.confirmText !== '' ? (
            <Button type="primary" htmlType="submit" className="form-block-submit-btn">
              提交
            </Button>
          ) : null}
        </Row>
      </AntdForm>
    </Spin>
  );
};

export default Form;
