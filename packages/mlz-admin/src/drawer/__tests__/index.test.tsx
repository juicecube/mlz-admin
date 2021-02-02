import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Dropdown from '..';

describe('🧪 Dropdown', () => {
  testMount(Dropdown);
  testSnapshot(Dropdown);
});
