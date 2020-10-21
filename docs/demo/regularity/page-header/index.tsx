import React, { useState, useEffect } from 'react';
import { Typography } from '@mlz/admin';
import './index.less';

const { Title, Text } = Typography;
const PageHeader = (props: { title: string; showReminder?: boolean }) => (
  <header className="page-header-wrapper">
    <Title className="title">{props.title}</Title>
    {props.showReminder !== false ? (
      <Text className="reminder" type="secondary">
        @引用整理于Ant design 3.12.0，部分有所调整
      </Text>
    ) : null}
  </header>
);

export default PageHeader;
