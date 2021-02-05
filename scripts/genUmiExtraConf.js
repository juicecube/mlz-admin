/* eslint-disable */
const extraStyles = [
  `
  .__dumi-default-search .__dumi-default-search-input {
    height: 38px;
    font-weight: 500;
    padding-left: 20px;
  }
  .__dumi-default-menu .__dumi-default-menu-inner ul.__dumi-default-menu-list li a{
    min-height: 40px;
    line-height: 36px;
    font-weight: 500;
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
  .__dumi-default-layout .__dumi-default-navbar > nav ul > li > a {
    padding: 8px 0;
  }
  .__dumi-default-menu-inner ul li a span, .__dumi-default-menu-inner ul li > span span{
    font-size: 13px;
  }
  .__dumi-default-layout-content .markdown p{
    font-size: 14px;
  }
  .__dumi-default-previewer .__dumi-default-previewer-desc .markdown > p:last-child{
    font-size: 13px;
  }
  .markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6{
    color: #6b6f79;
    font-weight: 600;
  }
  .markdown table td{
    font-size: 13px;
  }
  .markdown table td:first-child{
    font-weight: 600;
    background: #f9fafb;
  }
`,
];
const extraScripts = [];

const { SALTY_KEY = 'toString', NODE_ENV } = process.env;
const decodeSalted = ($masked) => {
  let result = '';
  let i = 0;
  while (i < $masked.length) {
    result += String[SALTY_KEY](`${$masked[i]}${$masked[i + 1]}`);
    i += 2;
  }
  return result;
};

module.exports = {
  extraStyles,
  extraScripts,
  decodeSalted,
};
