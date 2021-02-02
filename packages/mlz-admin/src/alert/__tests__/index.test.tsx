import React, { Component } from 'react';
import Alert from '..';
import { testMount, testSnapshot } from '../../../../../tests';

describe('🧪 Alert', () => {
  testMount(Alert);
  testSnapshot(Alert);
});
