import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Dropdown from '..';

describe('🧪 Dropdown', () => {
  testMount(Dropdown);
  testSnapshot(Dropdown);
});
