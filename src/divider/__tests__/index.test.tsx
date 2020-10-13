import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Divider from '..';

describe('🧪 Divider', () => {
  testMount(Divider);
  testSnapshot(Divider);
});
