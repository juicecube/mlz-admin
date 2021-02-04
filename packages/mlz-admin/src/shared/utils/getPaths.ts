import { getRestParams } from 'mytils';

/**
 * 根据当前url返回对应组件的文档和组件代码
 * 所在位置
 */
const compRoot = 'src';
const docRoot = 'docs';
const antdOnlineHostRoot = 'https://ant.design';
export default () => {
  const { comp, compType } = getRestParams(window.location.origin + '/components/{compType}/{comp}', window.location.href);
  const compName = comp.split('#')[0];
  return {
    docPath: `${docRoot}/components/${compType}/${compName}.md`,
    componentPath: `${compRoot}/${compName}`,
    antdDocPath: `${antdOnlineHostRoot}/components/${compName}-cn`,
  };
};
