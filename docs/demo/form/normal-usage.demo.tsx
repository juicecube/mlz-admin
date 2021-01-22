import React from 'react';
import { Form, Input, Button } from '@mlz/admin';

export default () => {
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入username!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入password!',
          },
        ]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
