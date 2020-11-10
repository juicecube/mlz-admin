import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Cascader from '..';

describe('🧪 Cascader', () => {
  testMount(Cascader);
  testSnapshot(Cascader);
});
