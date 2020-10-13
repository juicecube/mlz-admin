import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Breadcrumb from '..';

describe('🧪 Breadcrumb', () => {
  testMount(Breadcrumb);
  testSnapshot(Breadcrumb);
});
