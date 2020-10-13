import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import PageHeader from '..';

describe('🧪 PageHeader', () => {
  testMount(PageHeader);
  testSnapshot(PageHeader);
});
