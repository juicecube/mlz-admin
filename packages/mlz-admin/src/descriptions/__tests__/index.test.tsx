import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Descriptions from '..';

describe('🧪 Descriptions', () => {
  testMount(Descriptions);
  testSnapshot(Descriptions);
});
