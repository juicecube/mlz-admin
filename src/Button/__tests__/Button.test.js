import React from 'react';
import Button from './../Button.tsx';
import testMount from '../../shared/tests/testMount';

describe('test test', function () {

  //
  testMount(Button);

  //
  test('test 1st expectation', function () {
    expect(1 + 1).toBe(2);
  });
})