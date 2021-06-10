import { getRestParams } from 'mytils';

/**
 * 根据当前url返回对应组件的文档和组件代码
 * 所在位置
 */
const compsRoot = 'packages/mlz-admin/src';
const commonBusinessFunctionsRoot = 'packages/mlz-adminer/src';
const docRoot = 'docs';
const antdOnlineHostRoot = 'https://ant.design';
export default (isAdminer = false) => {
  const { comp, compType } = getRestParams(window.location.origin + '/components/{compType}/{comp}', window.location.href);
  const compName = comp.split('#')[0];
  return {
    docPath: `${docRoot}/components/${compType}/${compName}.md`,
    componentPath: `${isAdminer ? commonBusinessFunctionsRoot : compsRoot}/${compName}`,
    antdDocPath: `${antdOnlineHostRoot}/components/${compName}-cn`,
  };
};
