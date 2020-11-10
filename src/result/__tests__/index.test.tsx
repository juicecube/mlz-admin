import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Result from '..';

describe('🧪 Result', () => {
  testMount(Result);
  testSnapshot(Result);
});
