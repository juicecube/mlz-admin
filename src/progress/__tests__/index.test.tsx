import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Progress from '..';

describe('🧪 Progress', () => {
  testMount(Progress);
  testSnapshot(Progress);
});
