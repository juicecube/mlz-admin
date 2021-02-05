# Watermark 水印

> `📦 水印`用于为指定组件添加水印背景图片，声明数据隐私。

## 基本使用

```tsx
/**
 * title: 基本使用
 * desc: 通过`text`字段为水印添加文字底板
 * transform: true
 * compact: true
 */
import React from 'react';
import { Watermark, Button, Menu, Layout, Icon } from '@mlz/admin';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default () => (
  <Layout>
    <Sider>
      <div style={{ float: 'left', color: 'white', height: 32, margin: '16px 0', textAlign: 'center', width: '100%' }}>
        <img
          src="https://cmm-1252070958.cos.ap-guangzhou.myqcloud.com/logo?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDYRYpuprEH0s7sNYThKoQWCqnfREhQiKS%26q-sign-time%3D1612511088%3B1612514748%26q-key-time%3D1612511088%3B1612514748%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D045e31931acedf59df62f138a73957eee9102a32&x-cos-security-token=431458c7091e79151e3615c17f3a777810b233e910001"
          width="26"
          height="26"
        />
        <span style={{ padding: '0 8px' }}>Football Manager</span>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<Icon type="user" />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<Icon type="user" />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<Icon type="user" />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<Icon type="user" />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<Icon type="user" />} />
      </Menu>
    </Sider>
    <Watermark text="版权所有©️handsomest-man" loose={2} wrapGap={100}>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div style={{ width: '100%', height: 400, padding: '20px 0 0 20px' }}>在他人不知情的情况下，即使不以盈利为目的，私自盗用他人肖像照片，依旧会被认定为违法行为。</div>
        </Content>
      </Layout>
    </Watermark>
  </Layout>
);
```

## 更多属性

```tsx
/**
 * title: 更多属性
 * desc: 为组件提供更多样化的设定
 * transform: true
 * compact: true
 */
import React from 'react';
import { Watermark, Button, Menu, Layout, Icon } from '@mlz/admin';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default () => (
  <Layout>
    <Sider>
      <div style={{ float: 'left', color: 'white', height: 32, margin: '16px 0', textAlign: 'center', width: '100%' }}>
        <img
          src="https://cmm-1252070958.cos.ap-guangzhou.myqcloud.com/logo?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDYRYpuprEH0s7sNYThKoQWCqnfREhQiKS%26q-sign-time%3D1612511088%3B1612514748%26q-key-time%3D1612511088%3B1612514748%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D045e31931acedf59df62f138a73957eee9102a32&x-cos-security-token=431458c7091e79151e3615c17f3a777810b233e910001"
          width="26"
          height="26"
        />
        <span style={{ padding: '0 8px' }}>Football Manager</span>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<Icon type="user" />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<Icon type="user" />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<Icon type="user" />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<Icon type="user" />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<Icon type="user" />} />
      </Menu>
    </Sider>
    <Watermark text="调整后的版权所有©️handsomest-man" loose={3} wrapGap={120} startX={10} backgroundColor="#afafaf" textAlign="left" rotate={0} opacity={0.1}>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div style={{ width: '100%', height: 400, padding: '20px 0 0 20px' }}>在他人不知情的情况下，即使不以盈利为目的，私自盗用他人肖像照片，依旧会被认定为违法行为。</div>
        </Content>
      </Layout>
    </Watermark>
  </Layout>
);
```

## 优化内容

- 使用 canvas 作为水印背景，语义化更好的同时，一定程度提高了篡改 dom 的作恶成本。后续将用 ShadowRoot 进一步加强安全性。

---

## APIs

### Wartermark props

| 类型 Key      | 描述                            | 类型                         | 默认值                                  | 更多内容       |
| ------------- | ------------------------------- | ---------------------------- | --------------------------------------- | -------------- |
| **children**  | 支持的直接渲染的 Table 节点类型 | React.ReactElement           | -                                       |                |
| **text**      | 水印内容                        | string                       | -                                       |                |
| **wrapGap**   | 文字换行的最大宽度              | number                       | `80`                                    |                |
| **loose**     | 水印宽松度（间隔）              | number                       | `2.5`                                   | 有效区间是 2~6 |
| **startX**    | 开始位置的横坐标值              | number                       | `1`                                     |                |
| **startY**    | 开始位置的纵坐标值              | number                       | `0`                                     |                |
| **opacity**   | 水印文字透明度                  | number                       | `0.15`                                  |                |
| **fontStyle** | 水印文字样式设定                | [FontStyle](#fontstyle-type) | `{fontSize: 12, fontFamily: 'Georgia'}` |                |

### FontStyle [type]

| 类型 Key       | 描述        | 类型值 | 默认值    | 更多内容 |
| -------------- | ----------- | ------ | --------- | -------- |
| **fontSize**   | 字体大小    | number | `12`      |          |
| **fontFamily** | 字体 family | string | `Georgia` |          |

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters refered={false} />;
```
