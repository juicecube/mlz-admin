import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Skeleton from '..';

describe('🧪 Skeleton', () => {
  testMount(Skeleton);
  testSnapshot(Skeleton);
});
