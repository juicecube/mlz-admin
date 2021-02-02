# Select 选择器

> `📦 下拉选择器`用于对一系列选项做出一个或多个选择。

## 基本使用

```tsx
/**
 * title: 基本使用
 * desc: 最简单的用法。
 */
import React from 'react';
import { Select, message, Divider } from '@mlz/admin';

const { Option } = Select;
const handleChange = (value) => {
  message.success(`selected ${value}`);
};
const commonStyle = { marginRight: 10, minWidth: 168 };

export default () => (
  <>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange} autoFocus style={commonStyle}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} disabled style={commonStyle}>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} loading style={commonStyle}>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} allowClear style={commonStyle}>
      <Option value="lucy">Lucy</Option>
    </Select>
  </>
);
```

## 带搜索功能

```tsx
/**
 * title: 带搜索功能
 * desc: 展开后可对选项进行搜索。
 */
import React from 'react';
import { Select, message } from '@mlz/admin';

const { Option } = Select;
const options = ['成龙', '吴彦祖', '谢霆锋', '杨采妮', '蔡卓妍', '安志杰', '尹子维', '王杰'];
const commonStyle = { marginRight: 10, minWidth: 168 };
const onChange = (value) => {
  message.success(`选中： ${value}`);
};
const onSearch = (value) => {
  message.success(`搜索内容: ${value}`);
};
export default () => (
  <Select
    showSearch
    style={{ width: 168 }}
    placeholder="选择一个人"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
    {options.map((item) => (
      <Option value={item}>{item}</Option>
    ))}
  </Select>
);
```

## 多选

```tsx
/**
 * title: 多选
 * desc: 多选，从已有条目中选择。同样可以输入内容搜索，也可以输入内容创建新选项，按需求定制。
 */
import React from 'react';
import { Select, message } from '@mlz/admin';

const { Option } = Select;
const children = [
  <Option key={`吴彦祖`} value={`吴彦祖`}>
    吴彦祖
  </Option>,
].concat(
  new Array(25).fill('').map((_, i) => (
    <Option key={i.toString(36) + i} value={`成龙${i}`}>
      {`成龙${i}`}
    </Option>
  )),
);

const handleChange = (value) => {
  message.success(`已选中： ${value}`);
};

const commonStyle = { marginRight: 10, minWidth: 168 * 2 };
export default () => (
  <>
    <Select mode="multiple" allowClear style={commonStyle} placeholder="请选择" defaultValue={['成龙', '吴彦祖']} onChange={handleChange}>
      {children.sort(() => 0.5 - Math.random())}
    </Select>
    <Select mode="multiple" disabled style={commonStyle} placeholder="请选择" defaultValue={['成龙', '吴彦祖']} onChange={handleChange}>
      {children}
    </Select>
  </>
);
```

## 选项分组

```tsx
/**
 * title: 选项分组
 * desc: 可给选项分组展示。
 */
import React from 'react';
import { Select, message } from '@mlz/admin';

const { Option, OptGroup } = Select;
const handleChange = (value) => {
  message.success(`已选中： ${value}`);
};

export default () => (
  <Select defaultValue="China" style={{ width: 200 }} onChange={handleChange}>
    <OptGroup label="A组">
      <Option value="China">中国</Option>
      <Option value="Spain">西班牙</Option>
      <Option value="Germany">德国</Option>
      <Option value="Italy">意大利</Option>
    </OptGroup>
    <OptGroup label="B组">
      <Option value="Uruguay">乌拉圭</Option>
      <Option value="Columbia">哥伦比亚</Option>
      <Option value="Riben">日本</Option>
      <Option value="Saudi Arabia">沙特阿拉伯</Option>
    </OptGroup>
    <OptGroup label="C组">
      <Option value="Brazil">巴西</Option>
      <Option value="England">英格兰</Option>
      <Option value="Czekh">捷克</Option>
      <Option value="Argentina">阿根廷</Option>
    </OptGroup>
  </Select>
);
```

## 优化内容

暂无

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters />;
```
