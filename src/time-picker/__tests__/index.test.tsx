import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import TimePicker from '..';

describe('🧪 TimePicker', () => {
  testMount(TimePicker);
  testSnapshot(TimePicker);
});
