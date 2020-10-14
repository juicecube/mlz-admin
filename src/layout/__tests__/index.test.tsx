import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import List from '..';

describe('🧪 List', () => {
  testMount(List);
  testSnapshot(List);
});
