import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Breadcrumb from '..';

describe('🧪 Breadcrumb', () => {
  testMount(Breadcrumb);
  testSnapshot(Breadcrumb);
});
