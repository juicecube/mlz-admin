export default (url, content?: string) => {
  return new Promise(() => {
    const scriptElem = document.createElement('script');
    if (content) {
      scriptElem.innerHTML = content;
    } else {
      scriptElem.setAttribute('src', url);
    }
    scriptElem.setAttribute('type', 'text/javascript');
    scriptElem.setAttribute('charset', 'utf-8');
    document.body.append(scriptElem);
  });
};
