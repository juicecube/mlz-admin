import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Tag from '..';

describe('🧪 Tag', () => {
  testMount(Tag);
  testSnapshot(Tag);
});
