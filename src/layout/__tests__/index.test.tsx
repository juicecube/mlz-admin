import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import List from '..';

describe('🧪 List', () => {
  testMount(List);
  testSnapshot(List);
});
