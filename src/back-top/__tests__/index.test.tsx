import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import BackTop from '..';

describe('🧪 BackTop', () => {
  testMount(BackTop);
  testSnapshot(BackTop);
});
