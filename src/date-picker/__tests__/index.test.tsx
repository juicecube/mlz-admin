import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import DatePicker from '..';

describe('🧪 DatePicker', () => {
  testMount(DatePicker);
  testSnapshot(DatePicker);
});
