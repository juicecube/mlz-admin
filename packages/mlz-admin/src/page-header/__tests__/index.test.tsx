import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import PageHeader from '..';

describe('🧪 PageHeader', () => {
  testMount(PageHeader);
  testSnapshot(PageHeader);
});
