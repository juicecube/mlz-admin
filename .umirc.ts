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
  favicon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
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
        title: '组合组件',
        children: getMds('components/composit').map((item) => 'components/composit/' + item),
      },
    ],
  },
  navs: [
    {
      title: '开始',
      path: '/start',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: '其它仓库',
      path: '/others',
    },
    {
      title: 'Github',
      path: 'https://github.com/juicecube/mlz-admin',
    },
  ],
});
