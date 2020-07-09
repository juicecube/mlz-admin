const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

global.console.warn = (message) => {
  throw message;
};
global.console.error = (message) => {
  throw message;
};

Enzyme.configure({ adapter: new Adapter() });
