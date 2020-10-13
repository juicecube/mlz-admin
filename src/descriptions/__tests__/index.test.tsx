import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Descriptions from '..';

describe('🧪 Descriptions', () => {
  testMount(Descriptions);
  testSnapshot(Descriptions);
});
