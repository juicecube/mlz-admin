import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Upload from '..';
import Button from '../../button';

const TempUploadMounter = () => (
  <Upload name="file" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" headers={{ authorization: 'authorization-text' }}>
    <Button>Click to Upload</Button>
  </Upload>
);

describe('🧪 Upload', () => {
  testMount(TempUploadMounter);
  testSnapshot(TempUploadMounter);
});
