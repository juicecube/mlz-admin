---
title: 后台产品级颜色规范
toc: 'menu'
order: 2
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

const { Paragraph, Text } = Typography;
const PrimaryColors = [
  {
    title: '主色',
    palette: [
      { name: 'blue-6', functionalName: '主色', code: '#1890FF', isPrimary: true },
      { name: 'blue-1', functionalName: 'Selected background', code: '#E6F7FF', fontColorRevert: true },
      { name: 'blue-5', functionalName: 'Hover', code: '#40A8FF' },
      { name: 'blue-6', functionalName: 'Normal', code: '#1890FF' },
      { name: 'blue-7', functionalName: 'Click', code: '#086DD9' },
    ],
  },
  {
    title: '',
    palette: [
      { name: '系统导航', functionalName: '', code: '#041C40', isPrimary: true },
      { name: '系统导航-高亮', functionalName: '', code: '#030D1D' },
    ],
  },
];
const functionalColors = [
  {
    title: '功能色',
    palette: [
      { name: 'green-6', functionalName: '成功', code: '#52C41A', isPrimary: true },
      { name: 'green-1', functionalName: '成功-浅', code: '#F6FFED', fontColorRevert: true },
      { name: 'blue-6', functionalName: '链接', code: '#52C41A' },
    ],
  },
  {
    title: '',
    palette: [
      { name: 'gold-6', functionalName: '警示', code: '#FAAD14', isPrimary: true },
      { name: 'gold-1', functionalName: '警示-浅', code: '#FFFBE6', fontColorRevert: true },
    ],
  },
  {
    title: '',
    palette: [
      { name: 'red-6', functionalName: '错误', code: '#F5222D', isPrimary: true },
      { name: 'red-1', functionalName: '错误-浅', code: '#FFF1F0', fontColorRevert: true },
    ],
  },
  {
    title: '',
    palette: [{ name: 'blue-6', functionalName: '链接', code: '#1890FF', isPrimary: true }],
  },
];
const objectiveColors = [
  {
    title: '中性色',
    palette: [
      { name: '背景', functionalName: '#000000', code: '2%', fontColorRevert: true, originRGB: `0,0,0` },
      { name: '表头', functionalName: '#000000', code: '4%', fontColorRevert: true, originRGB: `0,0,0` },
      { name: '分割线', functionalName: '#000000', code: '9%', fontColorRevert: true, originRGB: `0,0,0` },
      { name: '描边', functionalName: '#000000', code: '15%', fontColorRevert: true, originRGB: `0,0,0` },
      { name: '禁用', functionalName: '#000000', code: '25%', fontColorRevert: true, originRGB: `0,0,0` },
    ],
  },
];
const fontColors = [
  {
    title: '文字色',
    palette: [
      { name: '重要', functionalName: '#000000', code: '85%', originRGB: `0,0,0` },
      { name: '正文', functionalName: '#000000', code: '65%', originRGB: `0,0,0` },
      { name: '辅助', functionalName: '#000000', code: '45%', originRGB: `0,0,0` },
      { name: '禁用', functionalName: '#000000', code: '25%', originRGB: `0,0,0` },
    ],
  },
];

export default () => (
  <>
    <PageHeader title="后台产品级颜色规范" />
    <PageContainer>
      <>
        <Typography style={{ marginBottom: 80 }}>
          <Paragraph type="secondary">采用 HSB 色彩模型进行设计，该模型更便于设计师在调整色彩时对于颜色有明确的心理预期，同时也方便团队间的沟通。</Paragraph>
          <Paragraph type="secondary">
            以上基本色可满足后台日常基本需求，提高用色的效率，但不是限制，根据需求可增加必要的新颜色，基于『确定』和『自然』的设计价值观，建议使用现实生活中常见的颜色，不建议使用明度过高或过低的颜色，或过于夺目的渐变色，避免降低内容本身的视觉层级，以实际功能出发，避免即兴发挥，如有不确定请与设计团队沟通。
          </Paragraph>
          <Paragraph type="secondary">
            在此 Sketch 源文件中，所有颜色均建好 “Layer Style”，请在右侧操作栏中直接选用，省去复制、吸色等操作，避免误差。增加新颜色后，也更新 “Layer Style”，并在此画板添加。
          </Paragraph>
        </Typography>
      </>
      <Typography>
        <Paragraph style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 50%)', gridColumnGap: 40, marginBottom: 60 }}>
          {PrimaryColors.map((palette) => (
            <ColorPalette title={palette.title} colorList={palette.palette} />
          ))}
        </Paragraph>
        <Paragraph style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 33.3%)', gridColumnGap: 40, marginBottom: 60 }}>
          {functionalColors.map((palette) => (
            <ColorPalette title={palette.title} colorList={palette.palette} />
          ))}
        </Paragraph>
        <Paragraph style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 33.3%)', gridColumnGap: 40, marginBottom: 60 }}>
          {objectiveColors.map((palette) => (
            <ColorPalette title={palette.title} colorList={palette.palette} />
          ))}
        </Paragraph>
        <Paragraph style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 33.3%)', gridColumnGap: 40 }}>
          {fontColors.map((palette) => (
            <ColorPalette title={palette.title} colorList={palette.palette} />
          ))}
        </Paragraph>
      </Typography>
    </PageContainer>
  </>
);
```
