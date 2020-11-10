import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Slider from '..';

describe('🧪 Slider', () => {
  testMount(Slider);
  testSnapshot(Slider);
});
