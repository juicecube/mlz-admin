# KeepAlive 局部数据持久化

** `📦 KeepAlive`能够将子组件的状态持久化在内存当中。在某些场景下实现数据的续接，比如 Table 组件遭遇翻页，返回后查询和分页数据丢失等。 **

### 基本使用

```tsx
/**
 * title: 按钮类型
 * desc: 按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。
 */
import React from 'react';
import { KeepAlive, Form, Input, InputNumber, message } from '@mlz/admin';

export default () => (
  <>
    <KeepAlive cacheKey="test">
      <Form.Block
        columns={[
          { label: '姓名', name: 'name', render: <Input /> },
          { label: '得分', name: 'score', render: <InputNumber style={{ width: '100%' }} /> },
        ]}
        values
        onFinish={(values) => message.success(`发送的数据是${Object.values(values).toString()}`)}
      />
    </KeepAlive>
  </>
);
```

### APIs
