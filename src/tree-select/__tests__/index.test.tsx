import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import treeSelect from '..';

describe('🧪 treeSelect', () => {
  testMount(treeSelect);
  testSnapshot(treeSelect);
});
