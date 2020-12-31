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

const { SENTRY_DSN, VERCEL_ENV } = process.env;
// const productionConf =
//   VERCEL_ENV === 'production'
//     ? {
//       externals: {
//         '@sentry/browser': 'window.sentry',
//         '@sentry/tracing': 'window.sentryTracing',
//       },
//       scripts: ['https://unpkg.com/browse/react@16.12.0/umd/react.production.min.js'],
//       headScripts: [
//         {
//           content: `window.process.env = ${process.env}`,
//           charset: 'utf-8',
//         },
//         {
//           content: `sentry.init({
//   dsn: ${SENTRY_DSN},
//   integrations: [
//     new sentryTracing.BrowserTracing(),
//   ],
//   tracesSampleRate: 1.0,
// })`,
//           charset: 'utf-8',
//         },
//       ],
//     }
//     : {};

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
        { title: 'Libra投放管理平台', path: 'https://libra.codemao.cn/' },
        { title: '行政综合支撑平台', path: 'https://support-admin.codemao.cn/' },
        { title: 'LuckyCat营销管理系统', path: 'https://luckycat-admin.codemao.cn/' },
        { title: 'SCM供应链管理系统', path: 'https://supply-chain-manage-admin.codemao.cn/' },
        { title: '猫小秘客服系统', path: 'https://secretary-cat.codemao.cn/' },
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
  metas: [
    {
      name: 'keywords',
      content: 'react, components, 编程猫, antd',
    },
    {
      name: 'description',
      content: '一套编程猫设计规范下的管理系统React组件库，基于Antd',
    },
  ],
  define: {
    $MOCK_PROXY_HOST$: 'https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect',
  },
  styles: [
    `
    .__dumi-default-search .__dumi-default-search-input {
      height: 38px;
      font-weight: 500;
      padding-left: 20px;
    }
    .__dumi-default-menu .__dumi-default-menu-inner ul.__dumi-default-menu-list li a{
      min-height: 46px;
      margin: 3px 0;
      line-height: 2.8;
    }
    .__dumi-default-menu .__dumi-default-menu-inner ul.__dumi-default-menu-list li a.active::after{
      width: 3px;
      height: 100%;
      content: '';
      background: #1890FF;
      position: absolute;
      right: 0;
      top: 0;
    }
    .__dumi-default-menu .__dumi-default-menu-inner ul.__dumi-default-menu-list li a::before {
      top: 0;
      left: -100%;
      width: 200%;
      height: 100%;
      border-radius: 0;
      opacity: 0.25;
      background-image: linear-gradient(to right, #1890FF 0%,#E6F7FF 80%);
      transition: transform 0s, opacity 0.2s;
    }
    .__dumi-default-navbar nav > a > ul > li > a {
      padding: 8px 0;
    }
  `,
  ],
  // ...productionConf,
});
