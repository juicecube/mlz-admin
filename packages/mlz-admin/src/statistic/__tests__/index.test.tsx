import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Statistic from '..';

describe('🧪 Statistic', () => {
  testMount(Statistic);
  testSnapshot(Statistic);
});
