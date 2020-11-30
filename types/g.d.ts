declare interface Window {
  IconScripts: URL['href'][];
  requestIdleCallback: (callback: function, options: any) => void;
  __DEV__: 'development' | 'production';
}
