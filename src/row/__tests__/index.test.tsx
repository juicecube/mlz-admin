import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Row from '..';

describe('🧪 Row', () => {
  testMount(Row);
  testSnapshot(Row);
});
