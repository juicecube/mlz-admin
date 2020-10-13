import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Tree from '..';

describe('🧪 Tree', () => {
  testMount(Tree);
  testSnapshot(Tree);
});
