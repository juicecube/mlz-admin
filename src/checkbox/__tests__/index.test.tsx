import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Checkbox from '..';

describe('🧪 Checkbox', () => {
  testMount(Checkbox);
  testSnapshot(Checkbox);
});
