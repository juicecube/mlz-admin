# useAuthGuard 内部账号权限系统

> `📦 内部账号权限系统`通过请求接口的返回内容动态生成一个项目所需的权限列表和交互资源。

## 1. 基本使用

```tsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Button, Modal, message, useAuthGuard } from '@mlz/admin';

export default () => {
  const { run: runStaffLogout } = useStaffLogout({ manual: true });
  return (
    <Button
      type="primary"
      onClick={() => {
        Modal.confirm({
          content: `确认退出登录？`,
          onOk() {
            runStaffLogout().then((res) => {
              message.success(`退出成功`);
            });
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }}>
      退出登录
    </Button>
  );
};
```

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters refered={false} isAdminer={true} />;
```
