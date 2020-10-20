import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Layout from '..';

describe('🧪 Layout', () => {
  testMount(Layout);
  testSnapshot(Layout);
});
