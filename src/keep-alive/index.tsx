import React from 'react';
import { string2dom, createBem } from '../shared/utils';
import { KeepAliveProps } from './index.type';
import { default as KeepAliveModel } from './model';

export const invalidElementReminder = `children isn't a valid react element, please check it`;

const bem = createBem('keep-alive-cache-rendering');
class KeepAlive extends React.Component<KeepAliveProps, {}> {
  constructor(p) {
    super(p);
    this.wrapperRef = React.createRef();
  }

  wrapperRef: React.Ref<HTMLDivElement>;

  componentDidMount() {
    !window['keep-alive-store'] && (window['keep-alive-store'] = new KeepAliveModel());
  }

  componentWillUnmount() {
    // 保存快照
    const { cacheKey, children } = this.props;
    if (React.isValidElement(children)) {
      window['keep-alive-store'].append(cacheKey, this.wrapperRef?.current.innerHTML);
    } else throw new Error(invalidElementReminder);
  }

  render() {
    const { cacheKey, children } = this.props;
    const matchedSnapshot = window['keep-alive-store']?.get(cacheKey);
    const MatchedCacheInstance = () => <>{string2dom(matchedSnapshot?.value)}</>;
    // const matchedCacheInstance = React.createElement('div', children?.props, string2dom(matchedSnapshot?.value));
    console.log(MatchedCacheInstance);
    return (
      <span ref={this.wrapperRef} className={bem('wrapper')}>
        {matchedSnapshot ? <MatchedCacheInstance /> : children}
      </span>
    );
  }
}

export default KeepAlive;
