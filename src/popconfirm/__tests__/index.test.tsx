import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Pagination from '..';

describe('🧪 Pagination', () => {
  testMount(Pagination);
  testSnapshot(Pagination);
});
