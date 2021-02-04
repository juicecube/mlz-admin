import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Spin from '..';

describe('🧪 Spin', () => {
  testMount(Spin);
  testSnapshot(Spin);
});
