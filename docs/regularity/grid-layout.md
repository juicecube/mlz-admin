---
title: 栅格
toc: 'menu'
order: 5
group:
  title: 设计规范
  path: /
---

```tsx
/**
 * inline: true
 * transform: true
 */
import React, { useState, useEffect } from 'react';
import PageHeader from '../demo/regularity/page-header';
import PageContainer from '../demo/regularity/page-container';
import ImageViewer from '../demo/regularity/image-viewer';
import { Typography, Layout, Row, Col, Button } from '@mlz/admin';

const { Paragraph, Text, Title, Link } = Typography;
const { Header, Content, Footer, Sider } = Layout;

// 规范常量
const contentWidth = 1152;
const layoutWidth = 1366;
const colNum = 24;
const columnCount = 12;
const everyColSpan = colNum / columnCount;
const gutter = 24;

// demo使用的常量
const style = { background: '#1890FF', color: 'white', paddingTop: 20, textAlign: 'center', minHeight: 360 };
const _fakeSiderWidth = 140;
const _fakeSiderCollapsedWidth = 55;

export default () => {
  const [collapsed, toggleCollapsed] = useState(false);
  const [fakeSiderWidth, setFakeSiderWidth] = useState(_fakeSiderWidth);
  useEffect(() => {
    collapsed ? setFakeSiderWidth(_fakeSiderCollapsedWidth) : setFakeSiderWidth(_fakeSiderWidth);
  }, [collapsed]);

  return (
    <>
      <PageHeader title="栅格" />
      <PageContainer>
        <Typography style={{ marginBottom: 80 }}>
          <Paragraph type="secondary">
            {colNum} 栅格体系。以 {layoutWidth} 上下布局的结构为例，对宽度为 {contentWidth} 的内容区域 进行 {colNum} 栅格的划分设置，如下图所示。我们为页面中栅格的 “列”
            设定了定值，即浏览器在一定范围扩大或缩小，栅格的 “列” 宽度会随之扩大或缩小，但 “水槽” 的宽度值固定不变。
          </Paragraph>
        </Typography>

        <Typography style={{ marginBottom: 80 }}>
          <Title level={4}>顶部导航布局（上下布局）</Title>
          <Layout>
            <Header style={{ width: '100%' }}>
              <div style={{ padding: '0 16px' }}></div>
            </Header>
            <Content>
              <Row gutter={gutter} style={{ width: `${(contentWidth / layoutWidth) * 100}%`, margin: '0 auto', background: 'white' }}>
                {new Array(columnCount).fill('').map((_, index) => (
                  <Col className="gutter-row" span={everyColSpan}>
                    <div style={style}>
                      col-{index + 1} span={everyColSpan}
                    </div>
                  </Col>
                ))}
              </Row>
            </Content>
          </Layout>
        </Typography>

        <Typography style={{ marginBottom: 80 }}>
          <Title level={4}>侧边导航布（左右布局）</Title>
          <Layout style={{ position: 'relative' }}>
            <div className="fake-sider" style={{ width: fakeSiderWidth, height: '100%', position: 'absolute', left: 0, top: 0, background: '#001529' }}></div>
            <Layout className="site-layout" style={{ marginLeft: fakeSiderWidth }}>
              <Header style={{ width: '100%', paddingLeft: 0 }}>
                <Button size="small" type="primary" onClick={() => toggleCollapsed(!collapsed)}>
                  变{collapsed ? '大' : '小'}
                </Button>
              </Header>
              <Content style={{ padding: 24, background: '#FF7875' }}>
                <Row gutter={gutter} style={{ width: `${100}%`, margin: '0 auto', background: 'white' }}>
                  {new Array(columnCount).fill('').map((_, index) => (
                    <Col className="gutter-row" span={everyColSpan}>
                      <div style={style}>
                        col-{index + 1} span={everyColSpan}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Content>
            </Layout>
          </Layout>
        </Typography>

        <Typography>
          <Title level={4}>布局</Title>
          参考 <Link href="/components/structure/layout">Layout组件</Link> 文档
        </Typography>
      </PageContainer>
    </>
  );
};
```
