import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Select from '..';

describe('🧪 Select', () => {
  testMount(Select);
  testSnapshot(Select);
});
