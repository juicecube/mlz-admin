import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Select from '..';

describe('🧪 Select', () => {
  testMount(Select);
  testSnapshot(Select);
});
