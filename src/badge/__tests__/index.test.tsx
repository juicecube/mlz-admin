import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Badge from '..';

describe('🧪 Badge', () => {
  testMount(Badge);
  testSnapshot(Badge);
});
