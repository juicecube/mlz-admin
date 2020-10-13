import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Calendar from '..';

describe('🧪 Calendar', () => {
  testMount(Calendar);
  testSnapshot(Calendar);
});
