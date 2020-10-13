import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Timeline from '..';

describe('🧪 Timeline', () => {
  testMount(Timeline);
  testSnapshot(Timeline);
});
