export default (domString: string) => {
  const tempWrapper = document.createElement('div');
  tempWrapper.innerHTML = domString;
  return tempWrapper.childNodes[0];
};
