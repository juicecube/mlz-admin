type SupportingEnv = 'development' | 'production' | 'test';

declare interface Window extends global.Window {
  IconScripts: URL['href'][];
  __DEV__: SupportingEnv | undefined;
  __MLZ_ADMIN_ENV__: SupportingEnv | undefined;
  __MLZ_ADMIN_VERSION__: string;
  requestIdleCallback?: (callback: () => void, options: any) => void;
}
