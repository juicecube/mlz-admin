import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Tooltip from '..';

describe('🧪 Tooltip', () => {
  testMount(Tooltip);
  testSnapshot(Tooltip);
});
