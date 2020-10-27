import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Form from '..';

describe('🧪 Form', () => {
  testMount(Form);
  testSnapshot(Form);
});
