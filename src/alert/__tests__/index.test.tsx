import React, { Component } from 'react';
import Alert from '..';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';

describe('🧪 Alert', () => {
  testMount(Alert);
  testSnapshot(Alert);
});
