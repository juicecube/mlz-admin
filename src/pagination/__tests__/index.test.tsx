import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Popconfirm from '..';

describe('🧪 Popconfirm', () => {
  testMount(Popconfirm);
  testSnapshot(Popconfirm);
});
