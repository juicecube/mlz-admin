import React from 'react';
import { Layout as AntdLayout } from 'antd';
import ErrorBoundary from '../error-boundary';

type AntdContentProps = typeof Content;
export interface ContentProps extends AntdContentProps {
  errorBoundary?: boolean;
}

const Content = (props: ContentProps): typeof Content => {
  const { children, errorBoundary } = props;
  return errorBoundary === true || errorBoundary === undefined ? <ErrorBoundary>{children}</ErrorBoundary> : children;
};
AntdLayout.Content = Content;
export default AntdLayout;
