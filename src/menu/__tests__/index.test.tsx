import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Menu from '..';

describe('🧪 Menu', () => {
  testMount(Menu);
  testSnapshot(Menu);
});
