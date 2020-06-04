import { defineConfig } from 'dumi';

export default defineConfig({
  hash: true,
  title: '@mlz/admin',
  mode: 'site',
  favicon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  locales: [['zh-CN', '中文']],
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
