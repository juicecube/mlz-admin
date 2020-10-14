import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Upload from '..';

describe('📦  Upload', () => {
  testMount(Upload);
  testSnapshot(Upload);
});
