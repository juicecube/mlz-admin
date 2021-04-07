import { defineConfig } from 'dumi';
import path from 'path';
import fs from 'fs';
import { extraStyles, extraScripts, decodeSalted } from './scripts/genUmiExtraConf';

const { HOST_ROOT, NODE_ENV } = process.env;

// 根据dir获取其下的所有.md文件
const getMds = ($relativedFromDoc) => {
  const absltRoute = path.resolve(__dirname, 'docs/' + $relativedFromDoc);
  const files = fs.readdirSync(absltRoute).filter((file) => {
    return path.extname(file) === '.md';
  });
  return files;
};
const demoChildren = ['7673668265', '83858080798284456568777378', '7685677589676584456568777378', '83858080768945677265737845776578657169456568777378', '83696782698465828945676584'].map((key) =>
  decodeSalted(key),
);

export default defineConfig({
  hash: true,
  title: '@mlz/admin',
  mode: 'site',
  favicon: '/assets/logo.36.png',
  logo: '/assets/logo.360.png',
  locales: [['zh-CN', '中文']],
  publicPath: 'https://cmm-1252070958.file.myqcloud.com/',
  menus: {
    '/components': [
      {
        title: '布局',
        children: getMds('components/structure').map((item) => 'components/structure/' + item),
      },
      {
        title: '交互和展示',
        children: getMds('components/interactivity').map((item) => 'components/interactivity/' + item),
      },
      {
        title: '业务',
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
      children:
        NODE_ENV === 'development'
          ? [{ title: '开发环境不予以展示', path: `https://www.google.com` }]
          : [
              { title: 'Libra投放管理平台', path: `https://${demoChildren[0]}.${HOST_ROOT}` },
              { title: '行政综合支撑平台', path: `https://${demoChildren[1]}.${HOST_ROOT}` },
              { title: 'LuckyCat营销管理系统', path: `https://${demoChildren[2]}.${HOST_ROOT}` },
              { title: 'SCM供应链管理系统', path: `https://${demoChildren[3]}.${HOST_ROOT}` },
              { title: '猫小秘客服系统', path: `https://${demoChildren[4]}.${HOST_ROOT}` },
            ],
    },
    {
      title: 'Github',
      path: 'https://github.com/juicecube/mlz-admin',
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
