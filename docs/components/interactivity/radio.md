# Radio

**`📦 菜单`为页面和功能提供导航的菜单列表。**

```tsx
import React from 'react';
import Radio from '@/Radio/Radio';

const App = () => {
  return (
    <>
      <Radio.Group>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    </>
  );
};

export default App;
```
