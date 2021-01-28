# Transfer 穿梭框

> 双栏`📦 穿梭框`穿梭选择框。需要在多个可选项中进行多选时。穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。

## 基本使用

```tsx
/**
 * title: 基本使用
 * desc: 最简单的用法。
 */
import React, { useState } from 'react';
import { Transfer } from '@mlz/admin';

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
}
const initialTargetKeys = mockData.filter((item) => +item.key > 10).map((item) => item.key);

export default () => {
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onChange = (nextTargetKeys, direction, moveKeys) => {
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  return (
    <Transfer
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={onChange}
      onSelectChange={onSelectChange}
      render={(item) => item.title}
    />
  );
};
```

## 带搜索框

```tsx
/**
 * title: 带搜索框
 * desc: 带搜索框的穿梭框，可以自定义搜索函数。
 */
import React, { useState } from 'react';
import { Transfer, message } from '@mlz/admin';
class App extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  };

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  };

  handleSearch = (dir, value) => {
    message.success('search:' + dir + value);
  };

  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        showSearch
        filterOption={this.filterOption}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        onSearch={this.handleSearch}
        render={(item) => item.title}
      />
    );
  }
}

export default App;
```

## 带标题（表格穿梭框）

<code src="./../../demo/transfer/with-table.demo.tsx" />

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
