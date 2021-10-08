import React, { StrictMode } from 'react';
import { Layout as AntdLayout } from 'antd';
import ErrorBoundary from '../error-boundary';

type AntdContentProps = typeof AntdLayout.Content;
export interface ContentProps extends AntdContentProps {
  errorBoundary?: boolean;
  children: React.ReactElement;
}

const Content = (props: ContentProps): typeof Content => {
  const { children, errorBoundary } = props;
  return errorBoundary === true || errorBoundary === undefined ? <ErrorBoundary>{children}</ErrorBoundary> : children;
};

AntdLayout.Content = Content;
export default AntdLayout;
