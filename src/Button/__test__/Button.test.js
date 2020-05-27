import React from 'react';
import Button from '../Button';
import testMount from '../../../tests/testMount';

describe('📦 Button', function () {
  //
  testMount(Button);

  //
  test('test 1st expectation', function () {
    expect(1 + 1).toBe(2);
  });
});
