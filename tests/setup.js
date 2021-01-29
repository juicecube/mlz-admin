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
if (typeof window !== 'undefined') {
  global.window.resizeTo = (width, height) => {
    global.window.innerWidth = width || global.window.innerWidth;
    global.window.innerHeight = height || global.window.innerHeight;
    global.window.dispatchEvent(new Event('resize'));
  };
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((qy) => ({
      matches: false,
      media: qy,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      // 有些组件的优化需求需要
      requestIdleCallback: jest.fn(),
    })),
  });
}

// antd组件需要
Object.assign(Enzyme.ReactWrapper.prototype, {
  triggerResize() {
    const ob = this.findObserver();
    ob.instance().onResize([{ target: ob.getDOMNode() }]);
  },
});

// 暂时不对React 17进行支持
Enzyme.configure({ adapter: new Adapter() });
