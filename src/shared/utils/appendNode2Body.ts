import appendScript from './appendScript';

export default (nodeTagName: string, attributesConf: Record<any, any>) => {
  if (nodeTagName === 'script') {
    return appendScript(attributesConf.innerHML);
  }
  return new Promise((rsl, rej) => {
    const domNode = document.createElement(nodeTagName);
    Object.keys(attributesConf).forEach((attrKey) => {
      if (attrKey === 'innerHTML') {
        domNode.innerHTML = attributesConf['innerHTML'];
      } else {
        domNode.setAttribute(attrKey, attributesConf[attrKey]);
      }
    });
    domNode.onload = rsl;
    domNode.onerror = rej;
    document.body!.appendChild(domNode);
  });
};
