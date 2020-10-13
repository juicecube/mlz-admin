import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import InputNumber from '..';

describe('🧪 InputNumber', () => {
  testMount(InputNumber);
  testSnapshot(InputNumber);
});
