const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

global.console.warn = (message) => {
  throw message;
};
global.console.error = (message) => {
  throw message;
};
global.console.table = global.console.log = (info) => {
  return info;
};

/**
 * https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
 * 现在如果需要渲染js原生dom，要添加如下代码：
 */
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
    requestIdleCallback: jest.fn(),
  })),
});

Enzyme.configure({ adapter: new Adapter() });
