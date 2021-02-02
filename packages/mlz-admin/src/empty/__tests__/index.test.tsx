import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Empty from '..';

describe('🧪 Empty', () => {
  testMount(Empty);
  testSnapshot(Empty);
});
