import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Card from '..';

describe('🧪 Card', () => {
  testMount(Card);
  testSnapshot(Card);
});
