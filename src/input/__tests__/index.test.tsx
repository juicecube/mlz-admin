import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Input from '..';

describe('🧪 Input', () => {
  testMount(Input);
  testSnapshot(Input);
});
