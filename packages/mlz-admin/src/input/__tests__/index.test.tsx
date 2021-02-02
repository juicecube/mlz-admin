import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Input from '..';

describe('🧪 Input', () => {
  testMount(Input);
  testSnapshot(Input);
});
