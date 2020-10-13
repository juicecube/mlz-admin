import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Progress from '..';

describe('🧪 Progress', () => {
  testMount(Progress);
  testSnapshot(Progress);
});
