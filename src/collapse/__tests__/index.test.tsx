import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Collapse from '..';

describe('🧪 Col', () => {
  testMount(Collapse);
  testSnapshot(Collapse);
});
