import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Card from '..';

describe('🧪 Card', () => {
  testMount(Card);
  testSnapshot(Card);
});
