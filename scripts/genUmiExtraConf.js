#!/usr/bin/env node

const extraStyles = [
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
];
const extraScripts = [
  `
  window.less = {
    async: true,
    env: 'production'
  };
`,
];

module.exports = {
  extraStyles,
  extraScripts,
};
