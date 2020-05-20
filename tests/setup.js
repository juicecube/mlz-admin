const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

console.log('Current React Version:', React.version);

Enzyme.configure({ adapter: new Adapter() });
