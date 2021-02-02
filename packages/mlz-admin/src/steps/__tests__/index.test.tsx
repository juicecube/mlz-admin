import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Steps from '..';

describe('🧪 Steps', () => {
  testMount(Steps);
  testSnapshot(Steps);
});
