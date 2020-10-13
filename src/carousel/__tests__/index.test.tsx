import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Carousel from '..';

describe('🧪 Carousel', () => {
  testMount(Carousel);
  testSnapshot(Carousel);
});
