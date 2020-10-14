import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Avatar from '..';

describe('🧪 Avatar', () => {
  testMount(Avatar);
  testSnapshot(Avatar);
});
