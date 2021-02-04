import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Typography from '..';

const { Title, Paragraph, Text } = Typography;

const TempTypographyMounter = () => (
  <Typography>
    <Title>Introduction</Title>
    <Paragraph>
      In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </Paragraph>
    <Text strong>
      uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end
      development
    </Text>
    .
  </Typography>
);

describe('🧪 Typography', () => {
  testMount(TempTypographyMounter);
  testSnapshot(TempTypographyMounter);
});
