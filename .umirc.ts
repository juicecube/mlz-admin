import { defineConfig } from 'dumi';
import path from 'path';
import fs from 'fs';
import { extraStyles, extraScripts } from './scripts/genUmiExtraConf';

// 根据dir获取其下的所有.md文件
const getMds = ($relativedFromDoc) => {
  const absltRoute = path.resolve(__dirname, 'docs/' + $relativedFromDoc);
  const files = fs.readdirSync(absltRoute).filter((file) => {
    return path.extname(file) === '.md';
  });
  return files;
};

export default defineConfig({
  hash: true,
  title: '@mlz/admin',
  mode: 'site',
  favicon: '/assets/logo.36.png',
  logo: '/assets/logo.360.png',
  locales: [['zh-CN', '中文']],
  menus: {
    '/components': [
      {
        title: '布局',
        children: getMds('components/structure').map((item) => 'components/structure/' + item),
      },
      {
        title: '交互和展示组件',
        children: getMds('components/interactivity').map((item) => 'components/interactivity/' + item),
      },
      {
        title: '业务组件',
        children: getMds('components/composit').map((item) => 'components/composit/' + item),
      },
    ],
  },
  navs: [
    {
      title: '规范',
      path: '/regularity',
    },
    {
      title: '📦 组件',
      path: '/components',
    },
    {
      title: '案例',
      children: [
        { title: 'Libra投放管理平台', path: 'https://libra.codemao.cn/' },
        { title: '行政综合支撑平台', path: 'https://support-admin.codemao.cn/' },
        { title: 'LuckyCat营销管理系统', path: 'https://luckycat-admin.codemao.cn/' },
        { title: 'SCM供应链管理系统', path: 'https://supply-chain-manage-admin.codemao.cn/' },
        { title: '猫小秘客服系统', path: 'https://secretary-cat.codemao.cn/' },
      ],
    },
    {
      title: 'Github',
      path: 'https://github.com/juicecube/mlz-admin',
    },
    {
      title: '日志',
      path: '/changelogs',
    },
  ],
  theme: {
    '@c-primary': '#1890FF',
    '@c-link': '#1890FF',
    '@s-nav-height': '76px',
  },
  metas: [
    {
      name: 'keywords',
      content: 'react, components, 编程猫, antd',
    },
    {
      name: 'description',
      content: '一套遵循编程猫组件使用规范的管理系统React组件库，基于Antd',
    },
  ],
  define: {
    $MOCK_PROXY_HOST$: 'https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect',
  },
  headScripts: [...extraScripts],
  styles: [...extraStyles],
  // ...productionConf,
});
