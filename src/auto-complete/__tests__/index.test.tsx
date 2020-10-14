import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';

import AutoComplete from '..';

describe('🧪 AutoComplete', () => {
  testMount(AutoComplete);
  testSnapshot(AutoComplete);
});
