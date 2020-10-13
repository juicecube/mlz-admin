import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Skeleton from '..';

describe('🧪 Skeleton', () => {
  testMount(Skeleton);
  testSnapshot(Skeleton);
});
