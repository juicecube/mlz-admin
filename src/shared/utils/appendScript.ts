export default (url, content?: string) => {
  return new Promise((rsl, rej) => {
    const scriptElem = document.createElement('script');
    if (content) {
      scriptElem.innerHTML = content;
    } else {
      scriptElem.setAttribute('src', url);
    }
    scriptElem.setAttribute('type', 'text/javascript');
    scriptElem.setAttribute('charset', 'utf-8');
    scriptElem.onload = rsl;
    scriptElem.onerror = rej;
    document.head!.appendChild(scriptElem);
  });
};
