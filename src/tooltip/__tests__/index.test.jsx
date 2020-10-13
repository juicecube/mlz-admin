import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Tooltip from '..';

describe('🧪 Tooltip', () => {
  testMount(Tooltip);
  testSnapshot(Tooltip);
});
