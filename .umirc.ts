import { defineConfig } from 'dumi';
import path from 'path';
import fs from 'fs';

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
      title: '设计规范',
      path: '/regularity',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: '样板项目',
      children: [
        { title: 'Libra投放系统', path: 'https://libra.codemao.cn/' },
        { title: '行政综合支撑平台', path: 'https://support-admin.codemao.cn/' },
        { title: 'LuckyCat营销管理系统', path: 'https://luckycat-admin.codemao.cn/' },
        { title: '供应链管理系统', path: 'https://supply-chain-manage-admin.codemao.cn/' },
      ],
    },
    {
      title: '❤️ Star Us',
      path: 'https://github.com/juicecube/mlz-admin',
    },
    {
      title: '编程猫其它项目',
      path: '/others',
    },
  ],
  theme: {
    '@c-primary': '#1890FF',
    '@c-link': '#1890FF',
    '@s-nav-height': '76px',
  },
});
