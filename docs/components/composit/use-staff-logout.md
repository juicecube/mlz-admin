# useStaffLogout 内部账号退出登陆

> `📦 内部账号退出登陆`通过请求接口完成内部账号的退出登录。

## 1. 基本使用

```tsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Button, Modal } from '@mlz/admin';
import { useStaffLogout } from '@mlz/adminer';

export default () => {
  const { run } = useStaffLogout({ manual: true });
  return (
    <Button
      type="primary"
      onClick={() => {
        Modal.confirm({
          content: `确认退出登录？`,
          onOk() {
            run({ a: 'test' }).then((res) => {
              console.log(res);
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
