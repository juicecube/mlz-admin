import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import DatePicker from '..';

describe('🧪 DatePicker', () => {
  testMount(DatePicker);
  testSnapshot(DatePicker);
});
