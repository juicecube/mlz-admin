import React, { Component } from 'react';
import { testMount, testSnapshot, sleep } from '../../../../../tests';
import Watermark, { errorThrower } from '..';
import { mount } from 'enzyme';

jest.mock('../canvas', () => {
  return {
    drawText: jest.fn(),
  };
});

describe('🧪 DarkThemeToggler', () => {
  const props = {
    text: '测试',
    children: <span>1234</span>,
  };
  testMount(Watermark, props);
  testSnapshot(Watermark, props);

  test('Watermark组件的children必须唯一', async () => {
    let error = null;
    try {
      mount(
        // @ts-ignore
        <Watermark text="测试">
          <span id="s1" />
          <span id="s2" />
        </Watermark>,
      );
    } catch (err) {
      error = err;
    }

    expect(error).toMatch(/Watermark should have only one children, but got 2/);
  });
});
