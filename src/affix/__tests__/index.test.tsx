import React, { Component } from 'react';
import Affix from '..';
import Button from '../../button';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';

const TempAffixMounter = () => (
  <Affix>
    <Button type="primary">测试</Button>
  </Affix>
);

describe('🧪 Affix', () => {
  testMount(TempAffixMounter);
  testSnapshot(TempAffixMounter);
});
