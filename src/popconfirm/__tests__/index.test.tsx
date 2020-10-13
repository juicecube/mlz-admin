import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Pagination from '..';

describe('🧪 Pagination', () => {
  testMount(Pagination);
  testSnapshot(Pagination);
});
