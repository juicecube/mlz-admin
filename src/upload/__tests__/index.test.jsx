import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Upload from '..';

describe('📦  Upload', () => {
  testMount(Upload);
  testSnapshot(Upload);
});
