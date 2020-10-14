import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Menu from '..';

describe('🧪 Menu', () => {
  testMount(Menu);
  testSnapshot(Menu);
});
