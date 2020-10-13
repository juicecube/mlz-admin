import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Slider from '..';

describe('🧪 Slider', () => {
  testMount(Slider);
  testSnapshot(Slider);
});
