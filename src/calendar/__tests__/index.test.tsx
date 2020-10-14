import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Calendar from '..';

describe('🧪 Calendar', () => {
  testMount(Calendar);
  testSnapshot(Calendar);
});
