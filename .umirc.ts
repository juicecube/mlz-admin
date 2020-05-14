import { defineConfig } from 'dumi';

export default defineConfig({
  hash: true,
  title: 'admini',
  mode: 'site',
  favicon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  // description: '文档型管理系统组件库'
  menus: {
    '/': [
      {
        title: '开始',
        children: ['index'],
      },
    ],
    '/standards': [
      {
        title: '标准',
        children: ['standard'],
      },
    ],
    '/components': [
      {
        title: '组件',
        children: ['components/table', 'components/icon'],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
