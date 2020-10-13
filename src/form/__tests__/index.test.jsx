import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Form from '..';

describe('🧪 Form', () => {
  testMount(Form);
  testSnapshot(Form);
});
