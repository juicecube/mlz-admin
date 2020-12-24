import React from 'react';
import { string2dom, createBem } from '../shared/utils';
import { KeepAliveProps } from './index.type';
import { default as KeepAliveModel } from './model';
import { omitProps } from 'mytils';

export const invalidElementReminder = `children isn't a valid react element, please check it`;

const bem = createBem('keep-alive-cache-rendering');
class KeepAlive extends React.Component<KeepAliveProps, { wrapperRef: React.Ref<HTMLDivElement> }> {
  constructor(p) {
    super(p);
    this.state = {
      wrapperRef: React.createRef(),
    };
  }

  componentDidMount() {
    !window['keep-alive-store'] && (window['keep-alive-store'] = new KeepAliveModel());
  }

  componentWillUnmount() {
    // 保存快照
    const { cacheKey, children } = this.props;
    if (React.isValidElement(children)) {
      console.log(this.state.wrapperRef?.current, this.state.wrapperRef?.current.innerHTML);
      window['keep-alive-store'].append(cacheKey, this.state.wrapperRef?.current.innerHTML);
    } else throw new Error(invalidElementReminder);
  }

  render() {
    const { cacheKey, children } = this.props;
    const matchedSnapshot = window['keep-alive-store']?.get(cacheKey);
    const matchedCacheInstance = React.createElement('div', {
      ...children?.props,
      ...omitProps(['children', 'cacheKey'], this.props),
      // TODO: 增加xss过滤
      dangerouslySetInnerHTML: { __html: matchedSnapshot?.value },
    });
    return (
      <div ref={this.state.wrapperRef} className={bem('wrapper')}>
        {matchedSnapshot ? matchedCacheInstance : children}
      </div>
    );
  }
}

export default KeepAlive;
