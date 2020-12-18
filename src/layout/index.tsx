import React from 'react';
import { Layout as AntdLayout } from 'antd';
import ErrorBoundary from '../error-boundary';

type AntdContentProsp = typeof Content;
interface ContentProps extends AntdContentProsp {
  errorBoundary?: boolean;
}

const { Content: AntdContent } = AntdLayout;
const Content = (props: ContentProps): typeof Content => {
  const { children, errorBoundary } = props;
  return errorBoundary !== false ? <ErrorBoundary>{children}</ErrorBoundary> : children;
};
AntdLayout.Content = Content;
export default AntdLayout;
