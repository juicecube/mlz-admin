import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Collapse from '..';

describe('🧪 Col', () => {
  testMount(Collapse);
  testSnapshot(Collapse);
});
