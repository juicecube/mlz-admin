import React, { Component } from 'react';
import DecodePhone from '../../../src/decode-phone';

class Index extends Component {
  render() {
    return (
      <DecodePhone params="jZgOvsexafxJUlU3WHaMfA==">
        <span>155****1234</span>
      </DecodePhone>
    );
  }
}

export default Index;