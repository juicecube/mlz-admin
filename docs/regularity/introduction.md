---
title: 简介
toc: 'menu'
order: 1
group:
  title: 设计规范
  path: /
---

```tsx
/**
 * inline: true
 */
import React from 'react';
import PageHeader from '../demo/regularity/page-header';
import PageContainer from '../demo/regularity/page-container';
import ColorPalette from '../demo/regularity/color-palette';
import { Typography } from '@mlz/admin';

const { Paragraph, Title } = Typography;
export default () => (
  <>
    <PageHeader title="简介" />
    <PageContainer>
      <>
        <Typography>
          <Paragraph type="secondary" style={{ marginBottom: 60 }}>
            过去一段时间里，在编程猫内部出现很多管理项目、后台项目，由于底层设施不健全，项目与项目间代码可复用度非常低、"一次交互统一多处改动"情况频现。另外，同样需求、几乎一样的组件，在不同项目中的实现，共性和差异性参半，维护起来非常浪费资源。本项目旨在针对这一问题做出改善。
            <code style={{ fontSize: 14, padding: '3px 5px', background: '#f6f7f9' }}>对于开发人员，降低后台系统中常见交互模块的编码复杂度、提高代码一致性和可维护性；对于设计和产品，增强产品"需求 -> 交互"路径的确定性、项目更可控、集中精力于需求本身。</code>
          </Paragraph>
          <Paragraph style={{ marginBottom: 60 }}>
            <Title level={3}>设计规范</Title>
            <a
              href="https://lanhuapp.com/web/#/item/project/board?type=share_mark&pid=2b4ac70b-3182-4890-86b2-70f6212f5c79&activeSectionId=&teamId=9868f6d9-bdd8-42cd-a1d4-7f10da23fe39&param=910fd5dd-0d4a-446b-94f3-1cc8133320c3"
              target="_blank">
              后台规范1.2.0原稿 🎨
            </a>
          </Paragraph>
          <Paragraph>
            <Title level={3}>代码实现</Title>
            <a href="/components">@mlz/admin组件库 📦</a>
          </Paragraph>
        </Typography>
      </>
    </PageContainer>
  </>
);
```
