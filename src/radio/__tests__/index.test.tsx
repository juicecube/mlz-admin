import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Radio from '..';

describe('🧪 Radio', () => {
  testMount(Radio);
  testSnapshot(Radio);
});
