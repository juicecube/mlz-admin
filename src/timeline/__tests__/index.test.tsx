import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Timeline from '..';

describe('🧪 Timeline', () => {
  testMount(Timeline);
  testSnapshot(Timeline);
});
