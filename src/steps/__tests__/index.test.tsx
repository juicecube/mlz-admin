import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Steps from '..';

describe('🧪 Steps', () => {
  testMount(Steps);
  testSnapshot(Steps);
});
