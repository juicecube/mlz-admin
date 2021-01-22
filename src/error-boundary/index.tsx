import React, { ErrorInfo } from 'react';
import { Result, Typography } from 'antd';
import { ResultProps } from 'antd/lib/result';
import { createBem } from '../shared/utils';
import './index.less';

type metaData = string;
interface IErrorBoundaryState {
  hasError: boolean;
  error: Error;
  reactMetaStacks?: metaData[];
  browserMetaStacks?: metaData[];
}

const errorStackGenerator = (errorStackString: Error['stack'] | ErrorInfo['componentStack']): metaData[] => {
  return (
    errorStackString
      ?.split('\n')
      ?.filter((item) => item)
      ?.map((item) => item.trim()) || []
  );
};

const stackMetaTransformer = ($metaData: metaData[] | undefined) => {
  return $metaData?.map((meta, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <p key={index} style={{ marginBottom: 0, fontWeight: index === 0 ? 800 : 600 }}>
      {meta}
    </p>
  ));
};

const shouldDisplayErrorDetail = ['dev', 'development', 'test'].includes(process.env.NODE_ENV || 'development');

const bem = createBem('error-boundary');
const { Paragraph, Text } = Typography;
class ErrorBoundary extends React.Component<ResultProps, IErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: { name: '', message: '' }, reactMetaStacks: [], browserMetaStacks: [] };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    const reactMetaStacks = errorStackGenerator(info.componentStack);
    const browserMetaStacks = errorStackGenerator(error.stack);
    this.setState({ hasError: true, error, reactMetaStacks, browserMetaStacks });
  }

  render() {
    if (this.state.hasError) {
      const { error } = this.state;
      return (
        <Result
          status="error"
          title={`${error.name}: ${error.message}`}
          subTitle={`sorry，${this.state.reactMetaStacks?.[0]?.replace('in', '') || '当前页面'}发生了错误`}
          {...this.props}
          className={bem('wrapper')}>
          <Paragraph className={bem('paragraph')}>
            {shouldDisplayErrorDetail ? (
              <>
                <Text strong>{stackMetaTransformer(this.state.browserMetaStacks)}</Text>
                <hr />
                <Text strong>{stackMetaTransformer(this.state.reactMetaStacks)}</Text>
              </>
            ) : null}
          </Paragraph>
        </Result>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
