import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Result from '..';

describe('🧪 Result', () => {
  testMount(Result);
  testSnapshot(Result);
});
