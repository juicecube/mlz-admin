import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import BackTop from '..';

describe('🧪 BackTop', () => {
  testMount(BackTop);
  testSnapshot(BackTop);
});
