import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Col from '..';

describe('🧪 Col', () => {
  testMount(Col);
  testSnapshot(Col);
});
