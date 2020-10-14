import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Col from '..';

describe('🧪 Col', () => {
  testMount(Col);
  testSnapshot(Col);
});
