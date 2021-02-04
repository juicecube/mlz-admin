import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Carousel from '..';

describe('🧪 Carousel', () => {
  testMount(Carousel);
  testSnapshot(Carousel);
});
