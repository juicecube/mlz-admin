import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Row from '..';

describe('🧪 Row', () => {
  testMount(Row);
  testSnapshot(Row);
});
