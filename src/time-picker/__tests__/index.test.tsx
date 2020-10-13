import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import TimePicker from '..';

describe('🧪 TimePicker', () => {
  testMount(TimePicker);
  testSnapshot(TimePicker);
});
