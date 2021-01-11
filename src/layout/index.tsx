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
  const child = React.cloneElement(children, props);
  return errorBoundary !== false ? <ErrorBoundary>{child}</ErrorBoundary> : child;
};
AntdLayout.Content = Content;
export default AntdLayout;
