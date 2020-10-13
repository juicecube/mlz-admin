import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Tag from '..';

describe('🧪 Tag', () => {
  testMount(Tag);
  testSnapshot(Tag);
});
