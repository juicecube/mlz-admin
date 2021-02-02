---
title: 后台系统级颜色规范
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
import { generate } from '@ant-design/colors';

const { Paragraph, Text, Title } = Typography;
const generatePalettes = (mid) => generate(mid);

const palettes = [
  {
    title: 'Dust Red / 薄雾',
    subtitle: '斗志、奔放',
    desc: '热情、兴奋、能量、华丽的、辉煌的、生命力、主动性、活力、激情、辛辣的、炙热的、愤怒、危险、攻击性的、暴力性的、嫉妒、压力、压迫感、刺激性的。',
    colors: generatePalettes('#F5222D').map((color, index) => ({
      name: `red-${index + 1}`,
      functionalName: '',
      code: color,
      isPrimary: index === 5 ? true : false,
      fontColorRevert: index < 5 ? true : false,
    })),
  },
  {
    title: 'Volcano  / 火山',
    subtitle: '醒目、澎湃',
    desc: '活跃，温暖的、喜悦、开朗的，朝气蓬勃的，明快的、跃动感、亲近的，丰收、健康的、勤快的、明朗的、朴素的、安心的、温和的、任性的、竭斯底里的、嘈杂的、廉价的。',
    colors: generatePalettes('#FA541C').map((color, index) => ({
      name: `red-${index + 1}`,
      functionalName: '',
      code: color,
      isPrimary: index === 5 ? true : false,
      fontColorRevert: index < 5 ? true : false,
    })),
  },
  {
    title: 'Sunset Orange / 日暮',
    subtitle: '温暖、欢快',
    desc: '明快的、跃动感、亲近的，丰收、健康的、勤快的、明朗的、朴素的、安心的、温和的。',
    colors: generatePalettes('#FA8C16').map((color, index) => ({
      name: `red-${index + 1}`,
      functionalName: '',
      code: color,
      isPrimary: index === 5 ? true : false,
      fontColorRevert: index < 5 ? true : false,
    })),
  },
  {
    title: 'Calendula Gold / 金盏花',
    subtitle: '活力、积极',
    desc: '能量的、集中精神、健康的、幽默的、希望、开放感、未来宽厚的、勤快的、幸福纯洁明快之时、权威、非正式的、可爱的、繁华的、幼稚、不成熟、警戒。',
    colors: generatePalettes('#FAAD14').map((color, index) => ({
      name: `red-${index + 1}`,
      functionalName: '',
      code: color,
      isPrimary: index === 5 ? true : false,
      fontColorRevert: index < 5 ? true : false,
    })),
  },
  {
    title: 'Sunrise Yellow / 日出',
    subtitle: '出生、阳光',
    desc: '能量的、集中精神、健康的、幽默的、希望、开放感、未来宽厚的、勤快的、幸福纯洁明快之时、权威、非正式的、可爱的、繁华的、幼稚、不成熟、警戒。',
    colors: generatePalettes('#FADB14').map((color, index) => ({
      name: `red-${index + 1}`,
      functionalName: '',
      code: color,
      isPrimary: index === 5 ? true : false,
      fontColorRevert: index < 5 ? true : false,
    })),
  },
  {
    title: 'Lime / 青柠',
    subtitle: '自然、生机',
    desc: '自然、和谐、平衡、健康的、和平、治疗、新鲜、安逸、安心、安定、诚实的、朴素的、放松的、年轻的、平等、公平、安全、不成熟、带有乡土气息的。',
    colors: generatePalettes('#A0D911').map((color, index) => ({
      name: `red-${index + 1}`,
      functionalName: '',
      code: color,
      isPrimary: index === 5 ? true : false,
      fontColorRevert: index < 5 ? true : false,
    })),
  },
  {
    title: 'Polar Green / 青柠',
    subtitle: '健康、创新',
    desc: '自然、和谐、平衡、健康的、和平、治疗、新鲜、安逸、安心、安定、诚实的、朴素的、放松的、年轻的、平等、公平、安全、不成熟、带有乡土气息的。',
    colors: generatePalettes('#52C41A').map((color, index) => ({
      name: `red-${index + 1}`,
      functionalName: '',
      code: color,
      isPrimary: index === 5 ? true : false,
      fontColorRevert: index < 5 ? true : false,
    })),
  },
  {
    title: 'Cyan / 明青',
    subtitle: '希望、坚强',
    desc: '',
    colors: generatePalettes('#13C2C2').map((color, index) => ({
      name: `red-${index + 1}`,
      functionalName: '',
      code: color,
      isPrimary: index === 5 ? true : false,
      fontColorRevert: index < 5 ? true : false,
    })),
  },
  {
    title: 'Daybreak Blue / 明青',
    subtitle: '包容、科技、普惠',
    desc: '稳重、镇静、冷静、爽快、清爽、清凉感、信赖感、沉着、知识性、清洁的、成功的、男性的、理性、诚实、荣誉、孤独、荒凉的、悲伤的、保守的、消极的',
    colors: generatePalettes('#1890FF').map((color, index) => ({
      name: `red-${index + 1}`,
      functionalName: '',
      code: color,
      isPrimary: index === 5 ? true : false,
      fontColorRevert: index < 5 ? true : false,
    })),
  },
  {
    title: 'Geek Blue / 极客蓝',
    subtitle: '探索、钻研',
    desc: '',
    colors: generatePalettes('#2F54EB').map((color, index) => ({
      name: `red-${index + 1}`,
      functionalName: '',
      code: color,
      isPrimary: index === 5 ? true : false,
      fontColorRevert: index < 5 ? true : false,
    })),
  },
  {
    title: 'Golden Purple / 酱紫',
    subtitle: '优雅、浪漫',
    desc: '高贵、典雅、高尚、优美、风度、尊严、干练、神秘、心性、性感的、豪华的、华丽的、改观的、不安、悲伤、孤独、嫉妒、自负、不健康、病弱、秘密。',
    colors: generatePalettes('#722ED1').map((color, index) => ({
      name: `red-${index + 1}`,
      functionalName: '',
      code: color,
      isPrimary: index === 5 ? true : false,
      fontColorRevert: index < 5 ? true : false,
    })),
  },
  {
    title: 'Magenta / 法式洋红',
    subtitle: '明快、感性',
    desc: '爱情、女性的、幸福、柔和的、优美的、甘甜的、可爱的、快乐的、华丽的、吻中的、淳朴的、浪漫的、温情的、幼稚、廉价的、软弱的。',
    colors: generatePalettes('#EB2F96').map((color, index) => ({
      name: `red-${index + 1}`,
      functionalName: '',
      code: color,
      isPrimary: index === 5 ? true : false,
      fontColorRevert: index < 5 ? true : false,
    })),
  },
];

export default () => (
  <>
    <PageHeader title="后台系统级颜色规范（色板）" />
    <PageContainer>
      <>
        <Typography style={{ marginBottom: 80 }}>
          <Paragraph type="secondary">采用 HSB 色彩模型进行设计，该模型更便于设计师在调整色彩时对于颜色有明确的心理预期，同时也方便团队间的沟通。</Paragraph>
          <Paragraph type="secondary">在此色板中，大多数情况下建议采用“6”号的颜色，单由于不同色相间相同纯度时，明度会有差别，所以遇到多色彩搭配时，设计师可根据实际情况调节。</Paragraph>
          <Paragraph type="secondary">
            色彩在使用时更多的是基于信息传递、操作引导和交互反馈等目的。在不破坏操作效率，影响信息的清晰传达的这些原则之上，理性的选择颜色是关键。当然在配图插画以及展示性页面中可以适当打破这一思路。
          </Paragraph>
          <Paragraph type="secondary">
            在配色时注意色彩本身的含义、情绪和表达，参考：<a href="https://zhuanlan.zhihu.com/p/64418581">《新人设计师需要懂的-色彩知识》</a>
          </Paragraph>
          <Paragraph type="secondary">
            关于色板的算法演进，参考：<a href="https://zhuanlan.zhihu.com/p/32422584">《Ant Design 色板生成算法演进之路》</a>
          </Paragraph>
        </Typography>
      </>
      <Typography>
        <Paragraph style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 25%)', gridColumnGap: 25 }}>
          {palettes.map((palette) => (
            <section style={{ marginBottom: 60 }}>
              <Title level={4} style={{ textAlign: 'center' }}>
                {palette.title}
              </Title>
              <h6 style={{ textAlign: 'center' }}>{palette.subtitle}</h6>
              <Text style={{ fontSize: 12, color: '#C1C1C1', display: 'block', height: 65 }}>{palette.desc}</Text>
              <ColorPalette colorList={palette.colors} />
            </section>
          ))}
        </Paragraph>
      </Typography>
    </PageContainer>
  </>
);
```
