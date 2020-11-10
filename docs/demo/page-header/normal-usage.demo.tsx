import React from 'react';
import { PageHeader } from 'antd';

export default () => {
  return <PageHeader className="site-page-header" onBack={() => null} title="Title" subTitle="This is a subtitle" />;
};
