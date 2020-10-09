import React, { Component } from 'react';
import { shallow, render, mount } from 'enzyme';

const CompInner = () => (
  <div className="test_comp_container3">
    <div className="test_comp_inner1">inner1</div>
    <div className="test_comp_inner2">inner2</div>
  </div>
);

const TestRCComp = () => (
  <div className="test_comp_wrapper">
    <div className="test_comp_container1">container1</div>
    <div className="test_comp_container2">container2</div>
    <CompInner />
  </div>
);

class TestClassComp extends React.Component {
  componentDidMount() {
    console.error('broken at componentDidMount');
  }

  componentDidUpdate() {
    console.error('broken at componentDidUpdate');
  }

  render() {
    return (
      <div className="test_comp_wrapper">
        <div className="test_comp_container1">container1</div>
        <div className="test_comp_container2">container2</div>
        <CompInner />
      </div>
    );
  }
}

describe('📦 shallow render test suit with breakers', () => {
  // onClick在menu/group属性存在时会成为合成事件被唤起，且参数正确
  it('with shallow render', () => {
    const wrapper = shallow(<TestClassComp />, {
      disableLifecycleMethods: true,
    });
  });
});

// describe('📦 full render test suit', () => {
//   // onClick在menu/group属性存在时会成为合成事件被唤起，且参数正确
//   it('with full render', () => {
//     const wrapper = mount(<TestRCComp />);
//     expect(wrapper.find('.test_comp_container3').length).toBe(1);
//   });
// });
