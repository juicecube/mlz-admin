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
            很多后台管理项目，由于底层设施不健全或无力构建底层。长期运行下来后，项目与项目间代码可复用度非常低，"不同项目内组件代码和交互不统一”、“更新一个组件，不同项目需要同时改动"、“同一类业务需求，在不同产品中实现结果不具有确定性”等情况频现，维护起来非常浪费精力和资源。本项目的建立，旨在针对这一问题做出改善。
            <code style={{ fontSize: 14, padding: '3px 5px', background: '#f6f7f9' }}>对于开发人员，降低后台系统中常见交互模块的编码复杂度、提高不同项目间的代码一致性，减小版本差异；对于设计和产品，增强产品"需求 -> 呈现"路径的确定性，项目更可控，集中精力于需求本身。</code>
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
