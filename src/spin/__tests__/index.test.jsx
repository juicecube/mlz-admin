import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Spin from '..';

describe('🧪 Spin', () => {
  testMount(Spin);
  testSnapshot(Spin);
});
