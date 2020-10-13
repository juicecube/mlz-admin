import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import AutoComplete from '..';

describe('🧪 AutoComplete', () => {
  testMount(AutoComplete);
  testSnapshot(AutoComplete);
});
