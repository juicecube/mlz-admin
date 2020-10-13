import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Popconfirm from '..';

describe('🧪 Popconfirm', () => {
  testMount(Popconfirm);
  testSnapshot(Popconfirm);
});
