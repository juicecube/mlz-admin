---
title: 后台系统图标规范
toc: 'menu'
order: 3
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
import ImageViewer from '../demo/regularity/image-viewer';
import { Typography, Image } from '@mlz/admin';

const { Paragraph, Text, Title, Link } = Typography;
const contents = {
  slots: [
    {
      title: '画板',
      desc: '系统图标都是按照 8 的 16 倍 128 x 128 的画板进行制作的。',
      pic: 'https://cmm-1252070958.cos.ap-guangzhou.myqcloud.com/p2.bmp',
      picStyle: { width: 399, height: 166 },
    },
    {
      title: '出血位',
      desc: '设计规格在图形的外围预留了 8px 的出血位，多数的图标在设计中我们都不建议超过这个区域。',
      pic: 'https://cmm-1252070958.cos.ap-guangzhou.myqcloud.com/p31.bmp',
      picStyle: { width: 343, height: 173 },
    },
    {
      title: '轮廓线',
      desc: '对基本图形进行规范，是图标设计中最常用的基本形式，设计师可以快速的调用并在此基础上做变形。',
      pic: 'https://cmm-1252070958.cos.ap-guangzhou.myqcloud.com/p4.bmp',
      picStyle: { width: 722, height: 331 },
    },
  ],
};
export default () => (
  <>
    <PageHeader title="后台系统图标规范" />
    <PageContainer>
      <div style={{ display: 'flex' }}>
        <ImageViewer src="https://cmm-1252070958.cos.ap-guangzhou.myqcloud.com/p1.bmp" style={{ marginRight: 16, width: 113, height: 113 }} />
        <Typography style={{ marginBottom: 100 }}>
          <Paragraph type="secondary">
            系统图标默认使用线性图标，在此基础上，还提供相对应的面性图标进行替换。 单独使用时，尺寸为 20pt，色值为 #000000 65%，在操作控件下使用时，尺寸为 16pt，色值为 #000000 25%
          </Paragraph>
          <Paragraph type="secondary">可登录网站 https://ant.design/components/icon-cn/ 或下载 Sketch 插件『Kitchen』使用完整的 Ant Design 图标库。</Paragraph>
        </Typography>
      </div>
      <Typography>
        <Title level={4}>设计规格</Title>
        {contents.slots.map((slot) => (
          <>
            <Paragraph style={{ margin: '20px 0' }}>
              <Text strong>{slot.title}：</Text>
              <Text type="secondary">{slot.desc}</Text>
            </Paragraph>
            <Paragraph style={{ marginBottom: 100 }}>
              <ImageViewer src={slot.pic} style={slot.picStyle || {}} />
            </Paragraph>
          </>
        ))}
      </Typography>
      <Typography>
        <Title level={4}>图标</Title>
        参考 <Link href="/components/interactivity/icon">Icon组件</Link> 文档
      </Typography>
    </PageContainer>
  </>
);
```
