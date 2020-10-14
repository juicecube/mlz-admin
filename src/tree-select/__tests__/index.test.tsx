import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import treeSelect from '..';

describe('🧪 treeSelect', () => {
  testMount(treeSelect);
  testSnapshot(treeSelect);
});
