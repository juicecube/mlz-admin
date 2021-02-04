import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import InputNumber from '..';

describe('🧪 InputNumber', () => {
  testMount(InputNumber);
  testSnapshot(InputNumber);
});
