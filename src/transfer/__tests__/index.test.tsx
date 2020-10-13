import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Transfer from '..';

describe('🧪 Transfer', () => {
  testMount(Transfer);
  testSnapshot(Transfer);
});
