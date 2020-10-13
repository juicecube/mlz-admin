import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Statistic from '..';

describe('🧪 Statistic', () => {
  testMount(Statistic);
  testSnapshot(Statistic);
});
