import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Checkbox from '..';

describe('🧪 Checkbox', () => {
  testMount(Checkbox);
  testSnapshot(Checkbox);
});
