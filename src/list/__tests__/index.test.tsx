import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Layout from '..';

describe('🧪 Layout', () => {
  testMount(Layout);
  testSnapshot(Layout);
});
