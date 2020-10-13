import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Modal from '..';

describe('🧪 Modal', () => {
  testMount(Modal);
  testSnapshot(Modal);
});
