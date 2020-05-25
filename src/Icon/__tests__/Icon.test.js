import React from 'react';
import Icon from '../Icon';
import testMount from '../../shared/tests/testMount';

describe('📦 Icon', function() {
  //
  testMount(Icon);

  //
  test('test 1st expectation', function() {
    expect(1 + 1).toBe(2);
  });
});
