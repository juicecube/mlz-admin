import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import Modal from '..';

describe('🧪 Modal', () => {
  testMount(Modal);
  testSnapshot(Modal);
});
