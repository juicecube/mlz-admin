import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Transfer from '..';

describe('🧪 Transfer', () => {
  testMount(Transfer);
  testSnapshot(Transfer);
});
