---
title: 文字规范
toc: 'menu'
order: 4
group:
  title: 设计规范
  path: /
---

```tsx
/**
 * inline: true
 * transform: true
 */
import React from 'react';
import PageHeader from '../demo/regularity/page-header';
import PageContainer from '../demo/regularity/page-container';
import ImageViewer from '../demo/regularity/image-viewer';
import { Typography, Row, Col } from '@mlz/admin';

const { Paragraph, Text, Title, Link } = Typography;

// 规范常量
const contentWidth = 1152;
const layoutWidth = 1366;
const colNum = 12;
const gutter = 24;

// demo使用的常量
const style = { background: '#1890FF', color: 'white', paddingTop: 20, textAlign: 'center', minHeight: 360 };
const fakeSiderWidth = 140;
const fakeSiderCollapsedWidth = 55;

//
const colors = [
  {
    title: 'H0 标题文字 14px Medium',
    desc: '用于表格标题、内容标题、弹窗标题等...',
    color: '#000',
    opacity: 0.85,
    weight: 600,
  },
  {
    title: 'H1 重要文字 14px Regular',
    desc: '用于重要的内容文字、输入框和选择器名称等...',
    color: '#000',
    opacity: 0.85,
    weight: 400,
  },
  {
    title: 'H2 正文文字 14px Regular',
    desc: '用于正文文字、输入内容文本等...',
    color: '#000',
    opacity: 0.65,
    weight: 400,
  },
  {
    title: 'H3 辅助文字 14px Regular',
    desc: '用于辅助性文字、次重要的说明文本等...',
    color: '#000',
    opacity: 0.45,
    weight: 400,
  },
  {
    title: 'H4 禁用文字 14px Regular',
    desc: '用于禁用状态、输入框和选择器的提示文字、层级较低的备注说明性文字等...',
    color: '#000',
    opacity: 0.25,
    weight: 400,
  },
  {
    title: 'H5 点击文字 14px Regular',
    desc: '用于可点击的文本、需要突出的数据文本等...',
    color: '#1890FF',
    opacity: 1,
    weight: 400,
  },
  {
    title: 'H6 成功提示文字 14px Regular',
    desc: '',
    color: '#52C41A',
    opacity: 1,
    weight: 400,
  },
  {
    title: 'H7 错误提示 14px Regular',
    desc: '',
    color: '#F5222D',
    opacity: 1,
    weight: 400,
  },
  {
    title: 'H8 警示提示 14px Regular',
    desc: '',
    color: '#FAAD14',
    opacity: 1,
    weight: 400,
  },
];

const colorsInDarkTheme = [];

export default () => (
  <>
    <PageHeader title="文字规范" />
    <PageContainer>
      <Typography style={{ marginBottom: 80 }}>
        <Paragraph type="secondary">
          Web 设计中常用最小字体为 12px，我们基于电脑显示器阅读距离（50 cm）以及最佳阅读角度（0.3），将原先的 12 上升至 14，以保证在多数常用显示器上的用户阅读效率最佳，本次更新对 14 与 12
          的字体进行了使用规范。
        </Paragraph>
        <Paragraph type="secondary">
          如在部分页面中需要用到更大号的字体，遵循“动态秩序”和“自然对数”的原则，可往上选择<span style={{ fontWeight: 'bold' }}> 16 20 24 30 38 46 </span>等字号，确保字色与规范一致的前提下。
        </Paragraph>
      </Typography>

      <Typography>
        <Paragraph style={{ display: 'grid' }}>
          <Title level={4}>字体</Title>
          <Paragraph type="secondary">Mac OS 中文：苹方 英文：SF Pro Text 数字：Helvetica Neue / Windows 中文：微软雅黑 英文：Times New Roman 数字：Times New Roman</Paragraph>
        </Paragraph>
      </Typography>

      <Typography>
        <Paragraph style={{ display: 'grid' }}>
          <Title level={4}>14px</Title>
          {colors.map((palette) => (
            <ol style={{ color: palette.color, fontWeight: palette.weight, opacity: palette.opacity, fontSize: 14, marginBottom: 18, float: 'left', listStyle: 'none', display: 'flex' }}>
              <li style={{ margin: 0 }}>{palette.title}</li>
              <li>{palette.desc}</li>
            </ol>
          ))}
        </Paragraph>
      </Typography>
    </PageContainer>
  </>
);
```
